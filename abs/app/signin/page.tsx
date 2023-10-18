'use client'
import account from '@/public/medias/svgs/account.svg'
import Background from '@/public/Login.jpg'
import lock from '@/public/medias/svgs/lock.svg'
import Background2 from '@/public/medias/dot-matrix-pattern.svg'
import RatingCard from '../component/Cards/userFeedback'
import UseCarousel from '../component/Carousel/useCarousel'
import {BsEmojiKiss, BsEmojiKissFill} from 'react-icons/bs'
import Navbar from '../component/Navs/navbar'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
import React from 'react';
import {MdDoneOutline} from 'react-icons/md'
import {FaTruckLoading} from 'react-icons/fa'
import 'font-awesome/css/font-awesome.min.css'
import Spin from '../component/animate/spin'

import {useDispatch} from 'react-redux'
import {Succesfull} from '../component/Notifier/Signin/Succesful'
import Footer from '../component/Navs/footer'
// import ReactBubblyEffectButton from 'react-bubbly-effect-button';

export type Gender = 'Male' | 'Female' | 'Non-binary' | 'Not Specified'
export interface UserVitalInfo {
    date: string
    join: string
    name: string
    city: string
    email: string
    token: string
    gender: Gender
    country: string
    address: string
    surname: string
    username: string
    other: string



}


type UserInfoTyped = keyof UserVitalInfo
export default function Signin() {
    const route = useRouter()
    const [userInfo, setUserInfo] = useState<UserVitalInfo>({} as UserVitalInfo);
    const SetUserInfo = (type: UserInfoTyped, value: string) => {
        setUserInfo((prev) => ({...prev, [type]: value}))
        return null
    }

    const Steps = [
        <div key={0} className=' space-y-5 animate-[propel-smoth-left_0.5s]'>
            <input onChange={(source) => SetUserInfo('name', source.target.value)} style={{background: `aliceblue url(${account.src}) no-repeat 20px`}} placeholder='FirstName ' type='search' className='text-blue-900 items-center px-[50px] focus:outline-none  xl:w-[80%] lg:[90%] w-full border-slate-200 h-10 rounded-[15px] bg-white' />
            <input onChange={(source) => SetUserInfo('surname', source.target.value)} style={{background: `aliceblue url(${account.src}) no-repeat 20px`}} autoCorrect={'false'} placeholder='Surname' type='text' className='text-blue-900 items-center px-[50px] focus:outline-none  xl:w-[80%] lg:[90%] w-full border-slate-200 h-10 rounded-[15px] bg-white' />,
            <input onChange={(source) => SetUserInfo('other', source.target.value)} style={{background: `aliceblue url(${account.src}) no-repeat 20px`}} placeholder='OtherName' type='text' className='text-blue-900 items-center px-[50px] focus:outline-none  xl:w-[80%] lg:[90%] w-full border-slate-200 h-10 rounded-[15px] bg-white' />
        </div>,

        <div key={1} className=' space-y-5 animate-[propel-smoth-left_0.5s]'>
            <select onChange={(source) => SetUserInfo('gender', source.target.value)} className='focus:outline-none bg-purple-800 text-white  xl:w-[80%] lg:[90%] w-full h-10 rounded-[5px] px-2'>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
                <option>Not Specified</option>
            </select>
            <input onChange={(source) => SetUserInfo('date', source.target.value)} style={{background: `aliceblue url(${lock.src}) no-repeat 20px`}} type='date' className='bg-purple-800 text-blue-900 items-center px-[50px] f focus:outline-none  xl:w-[80%] lg:[90%] w-full border-slate-200 h-10 rounded-[15px]' />,
        </div>,

        <div key={2} className=' space-y-5 animate-[propel-smoth-left_0.5s]'>
            <input onChange={(source) => SetUserInfo('country', source.target.value)} style={{background: `aliceblue url(${account.src}) no-repeat 20px`}} placeholder='country' type='search' className='text-blue-900 items-center px-[50px] focus:outline-none  xl:w-[80%] lg:[90%] w-full border-slate-200 h-10 rounded-[15px] bg-white' />
            <input onChange={(source) => SetUserInfo('city', source.target.value)} style={{background: `aliceblue url(${lock.src}) no-repeat 20px`}} placeholder='cites' type='country' className='text-blue-900 items-center px-[50px] focus:outline-none  xl:w-[80%] lg:[90%] w-full border-slate-200 h-10 rounded-[15px] bg-white' />
        </div>,

        <div key={3} className='space-y-5 animate-[propel-smoth-left_0.5s]'>
            <input onChange={(source) => SetUserInfo('username', source.target.value)} style={{background: `aliceblue url(${account.src}) no-repeat 20px`}} placeholder='@username ' type='search' className='text-blue-900 items-center px-[50px] focus:outline-none  xl:w-[80%] lg:[90%] w-full border-slate-200 h-10 rounded-[15px] bg-white' />
            <input onChange={(source) => SetUserInfo('email', source.target.value)} style={{background: `aliceblue url(${lock.src}) no-repeat 20px`}} placeholder='email' type='email' className='text-blue-900 items-center px-[50px] focus:outline-none  xl:w-[80%] lg:[90%] w-full border-slate-200 h-10 rounded-[15px] bg-white' />
        </div>,

        <div key={4} className=' space-y-5 animate-[propel-smoth-left_0.5s]'>
            <input onChange={(source) => SetUserInfo('token', source.target.value)} style={{background: `aliceblue url(${account.src}) no-repeat 20px`}} placeholder='Verify Token' type='number' className='text-blue-900 items-center px-[50px] focus:outline-none  xl:w-[80%] lg:[90%] w-full border-slate-200 h-10 rounded-[15px] bg-white' />
        </div>,

    ]
    const [stepIndex, setStepIndex] = useState<number>(0)
    const [enable, disable] = useState<boolean>(false);
    const [NextStep, setNextStep] = useState<React.JSX.Element>(Steps[stepIndex])

    useEffect(
        () => {
            const Inter = setTimeout(() => {disable(!enable)}, 5000)
            setNextStep(Steps[stepIndex])
            console.log(userInfo)
            return () => clearTimeout(Inter)
        }
        , [stepIndex])
    const Messgaes = [[<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />],]
    return (
        <div className='  overflow-y-hidden '>
            <div className='relative'>
                {stepIndex == Steps.length ? <Succesfull enable={enable} /> : <></>}
            </div>
            <Navbar />
            <div className='flex sm::px-[10%] sm::py-[10%] bg- ' style={{background: `aliceblue url(${Background2.src}) repeat`}}>
                <div>
                    <h1>Welcome to ABS signing Board</h1>
                    <div className="flex relative h-[100vh] sm:h-screen w-full h-full" style={{background: `url(${Background.src}) repeat-y`, backgroundSize: 'cover', backgroundPosition: '50% 50%'}}>
                        <div className=' bg-[#0000001f] rounded-md  h-full w-full'>
                            <h1 className='relative flex justify-center items-center mt-20 preview-text text-center bg-gradient-to-r from-purple-700 via-yellow-900-900 to-purple-950 bg-clip-text text-transparent w-full'><p>Satisfy Your Cravings with Cakes, Pastries, and Speedy Delivery!</p>  </h1>
                            <div className='flex justify-center  overflow-hidden xl:mt-[100px] xl:mb-[100px]'>
                                <UseCarousel itemsPayloads={[<RatingCard key={Math.floor(Math.random())} />]} />
                                {/* <div className='grid grid-cols-3 gap-4 shadow-2xl overflow-y-scroll '> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /></div> */}
                            </div>

                            <div className='  flex justify-center items-center  lg:hidden mt-[-200px] '>

                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,250.7C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
                                <div> <div className=" flex justify-center h-screen  text-center items-center  ">
                                    <div className='overflow-hidden relative w-full  shadow-full h-full flex text-center items-center  rounded-[10px]  items-center'>
                                        {/* <div className='w-[210px] h-[210px] bg-[#0000001f] absolute top-[0] left-[px] rounded-full left-[-50px] mt-[50%]  '>
                                <h1 className='text-center mt-[35%] font-bold text-purple-950 text-5xl ml-10'>Login</h1>
                            </div> */}
                                        {/* <div className='rotate-180 w-[1700px] h-[10300px] bg-[#0000001f] absolute top-[0] left-[px] rounded-full top-[-250px] right-[-1500px] -mt-[100px]'></div> */}

                                        <div className='flex px-[50px] justify-center items-center w-full h-full '>

                                            <div className='w-full rounded-[10px]  items-center  bg-white relative '>

                                                {/* <h1 className=' relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-purple-900 to-purple-950-300  bg-clip-text text-transparent preview-text font-bold text-purple-900 items-center text-center mt-[-30px]   '> ABS </h1> */}
                                                <div className='space-y-5'>
                                                    <div className=' bg-purple-500 h-10 rounded-t-[10px] w-full'>
                                                        <h1 className='w-full text-white py-2 no_wrap'> Signin And Join ABS Today</h1>
                                                    </div>


                                                    <div className='flex   px-10 justify-center items-center w-full '>
                                                        {NextStep}
                                                    </div>

                                                    <div className='flex  justify-center items-center mt-10  space-x-10 '>
                                                        <button className=' flex justify-center items-center space-x-5 hover:px-5 hover:bg-blue-600 bg-blue-900 h-10 w-[65%] rounded-md  hover:text-white' onClick={() => setStepIndex(e => e + 1)}><h1>Next</h1><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path className='text-white' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></button>
                                                        {/* <button className='hover:px-5 hover:bg-blue-600  rounded-md bg-blue-500 h-10 w-[20%]  hover:text-white'>Login</button> */}
                                                    </div>
                                                    <div className=' bg-purple-500 h-10 py-2 rounded-t-[10px] w-full'>
                                                        <h1 className='user-select:none' onClick={() => route.back()}>{"Already have account"} </h1>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,250.7C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
                                </div >

                            </div>

                            <div className=' xl:block lg:block hidden sm:button-[100px] left-[10%]'>
                                <h1 className='relative flex mt-10 justify-center items-center  preview-text text-center bg-gradient-to-r from-purple-700 via-yellow-900-900 to-purple-950 bg-clip-text text-transparent w-full'><p>Join Thousands in Sweet Celebrations! </p> </h1>
                                <div className='w-full items-center justify-center text-center sm:flex sm:space-x-10'>
                                    <span className="fa-duotone fa-spinner-third fa-spin"></span>
                                    <button className='bg-blue-900 w-2/5 px-2 h-10 rounded-md bg-gradient-to-r from-purple-700 via-yellow-900-900 to-purple-950'>Login</button>
                                    <button className='bg-blue-900 w-2/5 px-3 h-10 rounded-md bg-gradient-to-r from-purple-700 via-yellow-900-900 to-purple-950'>Sign-in</button>
                                </div>
                            </div>

                        </div>

                        <div className='relative w-3/4 lg:block hidden   '>
                            <div className='absolute bg-gradient-to-br from-purple-900 via-transparent to-transparent w-full h-full'>

                            </div>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,250.7C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
                            <div className=" flex justify-center h-screen  text-center items-center w-full  ">
                                <div className='overflow-hidden relative w-full  shadow-full h-full flex text-center items-center  rounded-[10px]  items-center'>
                                    {/* <div className='w-[210px] h-[210px] bg-[#0000001f] absolute top-[0] left-[px] rounded-full left-[-50px] mt-[50%]  '>
                                <h1 className='text-center mt-[35%] font-bold text-purple-950 text-5xl ml-10'>Login</h1>
                            </div> */}
                                    {/* <div className='rotate-180 w-[1700px] h-[10300px] bg-[#0000001f] absolute top-[0] left-[px] rounded-full top-[-250px] right-[-1500px] -mt-[100px]'></div> */}

                                    <div className='flex justify-center items-center w-full h-full '>

                                        <div className=' w-[98%] xl:w-[80%] items-center rounded-[10px] bg-white relative '>

                                            {/* <h1 className=' relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-purple-900 to-purple-950-300  bg-clip-text text-transparent preview-text font-bold text-purple-900 items-center text-center mt-[-30px]   '> ABS </h1> */}
                                            <div className='space-y-5'>
                                                <div className=' bg-purple-500 rounded-t-[10px] py-2 h-12'>
                                                    <h1 className='text-white text-xl'> Signin And Join ABS Todays</h1>
                                                </div>


                                                <div className='flex justify-center items-center  w-full'>

                                                    {NextStep}
                                                </div>

                                                <div className='lg:flex xl:flex justify-center items-center mt-10  space-x-10 '>
                                                    <button className=' flex justify-center items-center space-x-5 hover:px-5 hover:bg-blue-600 bg-blue-900 h-10 w-[65%] rounded-md  hover:text-white' onClick={() => setStepIndex(e => e + 1)}><h1>Next</h1><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path className='text-white' d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg></button>
                                                    {/* <button className='hover:px-5 hover:bg-blue-600  rounded-md bg-blue-500 h-10 w-[20%]  hover:text-white'>Login</button> */}
                                                </div>

                                                <div className=' bg-purple-500 rounded-b-[10px] py-2 h-10'>
                                                    <h1 className='text-white text-[14px]'> <h1 className='user-select-none' onClick={() => route.back()}>{"Already have account"} </h1></h1>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,250.7C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
                        </div >


                    </div >


                </div >
            </div>
            <Footer />
        </div>


    )
}