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
import Footer from '../component/Navs/footer'


export default function Login() {
    const route = useRouter()
    const Signin = () => {

    }
    const Messgaes = [[<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />], [<RatingCard key={Math.floor(Math.random())} />],]
    return (
        <div className=' h-full '>

            <Navbar />
            <div className='flex lg:px-[10%] lg:py-[10%]  ' style={{background: `aliceblue url(${Background2.src}) repeat`}}>
                <div><h1>Welcome to ABS signing Board</h1>
                    <div className="flex relative h-[100vh] sm:h-screen w-full h-full" style={{background: `url(${Background.src}) repeat-y`, backgroundSize: 'cover', backgroundPosition: '50% 50%'}}>
                        <div className=' bg-[#0000001f] rounded-md  h-full w-full'>
                            <h1 className='relative flex justify-center items-center mt-20 preview-text text-center bg-gradient-to-r from-purple-700 via-yellow-900-900 to-purple-950 bg-clip-text text-transparent w-full'><p>Satisfy Your Cravings with Cakes, Pastries, and Speedy Delivery!</p>  </h1>
                            <div className='flex justify-center  overflow-hidden xl:mt-[100px] xl:mb-[100px]'>
                                <UseCarousel itemsPayloads={[<RatingCard key={Math.floor(Math.random())} />]} />
                                {/* <div className='grid grid-cols-3 gap-4 shadow-2xl overflow-y-scroll '> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /></div> */}
                            </div>

                            <div className=' lg:hidden flex justify-center items-center  xl:hidden mt-[-200px] '>

                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,250.7C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
                                <div> <div className=" flex justify-center h-screen  text-center items-center  ">
                                    <div className='overflow-hidden relative w-full  shadow-full h-full flex text-center items-center  rounded-[10px]  items-center'>
                                        {/* <div className='w-[210px] h-[210px] bg-[#0000001f] absolute top-[0] left-[px] rounded-full left-[-50px] mt-[50%]  '>
                                <h1 className='text-center mt-[35%] font-bold text-purple-950 text-5xl ml-10'>Login</h1>
                            </div> */}
                                        {/* <div className='rotate-180 w-[1700px] h-[10300px] bg-[#0000001f] absolute top-[0] left-[px] rounded-full top-[-250px] right-[-1500px] -mt-[100px]'></div> */}

                                        <div className='flex justify-center items-center w-full h-full '>
                                            <div className='items-center space-y-5  '>
                                                <div className='rounded-[10px] bg-white   space-y-5'>
                                                    <h1 className='flex items-center justify-center space-x-5 text-slate-300  bg-purple-600 w-full h-10 rounded-t-[10px] '><img src={account.src} alt='acc' /> <span>Login</span> </h1>

                                                    <input style={{background: `aliceblue  url(${account.src}) no-repeat 2px`}} placeholder='@username ' type='search' className='hover:text-underline text-blue-900 items-center px-[30px] focus:outline-none w-[70%] border-slate-200 h-10 rounded-[15px] bg-white' />
                                                    <input style={{background: `aliceblue  url(${lock.src}) no-repeat 2px`}} placeholder='passwrod' type='password' className='hover:text-underline text-blue-900 items-center px-[30px] focus:outline-none w-[70%] border-slate-200 h-10 rounded-[15px] bg-white' />



                                                    <div className=' xl:flex justify-center items-center mt-10  space-x-10 '>
                                                        <button className='hover:px-5 hover:bg-blue-600 bg-blue-500 h-10  rounded-[10px]  hover:text-white w-[70%]' >Login</button>
                                                        {/* <button className='hover:px-5 hover:bg-blue-600  rounded-md bg-blue-500 h-10 w-[20%]  hover:text-white'>Login</button> */}
                                                    </div>
                                                    <h1 className='text-purple-600' onClick={() => Signin()}>{"Dont't have account "}</h1>
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
                                    <button className='bg-blue-900 w-2/5 px-2 h-10 rounded-md bg-gradient-to-r from-purple-700 via-yellow-900-900 to-purple-950'>Login</button>
                                    <button className='bg-blue-900 w-2/5 px-3 h-10 rounded-md bg-gradient-to-r from-purple-700 via-yellow-900-900 to-purple-950'>Sign-in</button>
                                </div>
                            </div>

                        </div>

                        <div className=' w-3/4 lg:block hidden   '>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,250.7C960,235,1200,181,1320,154.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg> */}
                            <div className=" flex justify-center h-screen  text-center items-center  ">
                                <div className='overflow-hidden relative w-full  shadow-full h-full flex text-center items-center  rounded-[10px]  items-center'>
                                    {/* <div className='w-[210px] h-[210px] bg-[#0000001f] absolute top-[0] left-[px] rounded-full left-[-50px] mt-[50%]  '>
                                <h1 className='text-center mt-[35%] font-bold text-purple-950 text-5xl ml-10'>Login</h1>
                            </div> */}
                                    {/* <div className='rotate-180 w-[1700px] h-[10300px] bg-[#0000001f] absolute top-[0] left-[px] rounded-full top-[-250px] right-[-1500px] -mt-[100px]'></div> */}

                                    <div className='flex justify-center items-center w-full h-full '>
                                        <div className='items-center space-y-5  '>
                                            <div className='flex justify-center items-center w-full h-full '>
                                                <div className='items-center space-y-5  '>
                                                    <div className='rounded-[10px] bg-white   space-y-5'>
                                                        <h1 className='flex items-center justify-center space-x-5 text-slate-300  bg-purple-600 w-full h-10 rounded-t-[10px] '><img src={account.src} alt='acc' /> <span>Login</span> </h1>

                                                        <input style={{background: `aliceblue  url(${account.src}) no-repeat 2px`}} placeholder='@username ' type='search' className='hover:text-underline text-blue-900 items-center px-[30px] focus:outline-none w-[70%] border-slate-200 h-10 rounded-[15px] bg-white' />
                                                        <input style={{background: `aliceblue  url(${lock.src}) no-repeat 2px`}} placeholder='passwrod' type='password' className='text-blue-900 items-center px-[30px] focus:outline-none w-[70%] border-slate-200 h-10 rounded-[15px] bg-white' />



                                                        <div className=' xl:flex justify-center items-center mt-10  space-x-10 '>
                                                            <button className='hover:px-5 hover:bg-blue-600 bg-blue-500 h-10  rounded-[10px]  hover:text-white w-[70%]' >Login</button>
                                                            {/* <button className='hover:px-5 hover:bg-blue-600  rounded-md bg-blue-500 h-10 w-[20%]  hover:text-white'>Login</button> */}
                                                        </div>
                                                        <h1 className='text-purple-600 mb-10' onClick={() => Signin()}>{"Dont't have account "}</h1>
                                                    </div>


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