'use client'
import * as IconBs from 'react-icons/bs'
export default function Footer() {
    return (<footer className='bg-blue-900 text-left'>
        {/* <Image src={yellow.src} height={100} width={200} alt='Logo' /> */}
        <div className='flex flex-row-reverse justify-between items-center font-[poppins,apple ,Helvetical] font-medium text-[.675rem]  px-10 py-[100px] w-full space-x-10 '>
            <ul className='block block items-center '>
                <li className='text-white font-extrabold '></li>
                <div className='flex flex-wrap w-full  space-x-10'>
                    <li className=''><IconBs.BsTwitter /></li>
                    <li className=''><IconBs.BsFacebook /></li>
                    <li className=''><IconBs.BsTiktok /></li>
                    <li className=''><IconBs.BsYoutube /></li>
                    <li className=''><IconBs.BsInstagram /></li>
                    <li className=''><IconBs.BsLinkedin /></li>
                </div>

                <div className='w-full flex items-center  space-x-1 mt-10'>
                    <input className='w-4/5 foucs:outline-none border-[1px] border-blue-800 bg-white rounded-md h-10' placeholder='Send us your email' />
                    <button className='rounded-md bg-blue-950 h-9 py-1 px-1 w-1/5'>Send</button>
                </div>
            </ul>


            <ul className='space-y-4'>
                <li className='text-white font-extrabold'>Delivery</li>
                <li className=''>Order For  Home Delivery </li>
                <li className=''>Order For ABS Perfait</li>
                <li className=''>Order For ABS Frame</li>
                <li className=''>Order For A Near By Delivery</li>
            </ul>

            <ul className='space-y-4'>
                <li className='text-white font-extrabold'>Services</li>
                <li className=''>Cakes</li>
                <li className=''>Snacks</li>
                <li className=''>Gifts & Packages</li>
                <li className=''>Frame</li>
                <li className=''>Make Surpriese</li>
            </ul>

            <ul className='space-y-4'>
                <li className='text-white font-extrabold'>Services</li>
                <li className=''>Cakes</li>
                <li className=''>Perfait</li>
                <li className=''>Delivery</li>
                <li className=''>Delivery</li>
                <li className=''>Make Surpriese</li>
            </ul>


            <ul className='space-y-4'>
                <li className='text-white font-extrabold'>Services</li>
                <li className=''>Cakes</li>
                <li className=''>Perfait</li>
                <li className=''> Fruits</li>
                <li className=''>Chips</li>
                <li className=''>Beakings</li>

            </ul>



            <ul className='space-y-4'>
                <li className='text-white font-extrabold'>Frames</li>
                <li className=''>1/2 Borderless</li>
                <li className=''>1/4 Borderless</li>
                <li className=''>1/5 Borderless</li>
                <li className=''>1/2 Borderless</li>
                <li className=''>1/6 Borderless</li>
                <li className=''>1/5 Borderless</li>
            </ul>

            <ul className='space-y-4'>
                <li className='text-white font-extrabold'>About us </li>
                <li className='hover:text-yellow-500'>ABS</li>
                <li className=''>Frames</li>
                <li className=''>Product</li>
                <li className=''>Delivery</li>
                <li className=''>Services</li>
                <li className=''>Nearby Delivery</li>
            </ul>

        </div>
        <hr className='divide-y w-full  border-yellow-500 text-white' />
        <p className='flex justify-center items-center font-[cursive]  py-1 px-1 '>All right reserved  . </p>
        <p className='flex justify-center items-center text-yellow  py-1 px-1 '> @2023 </p>



    </footer>)
}