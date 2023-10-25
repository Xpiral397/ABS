'use client'
import React, {useEffect, useState} from "react"
import yellow from '@/public/medias/ABSICON.png'
import Image from "next/image"

import * as IconBs from 'react-icons/bs'
import {useRouter} from "next/navigation"

export default function Navbar() {
    useEffect(
        () => {
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY
                if(scrollY > 10) {
                    setBackground((e: typeof background) => {
                        return {
                            ...e,
                            navBackground: 'bg-white text-purple-950',
                            itemList: "text-purple-950 text-[14px]"

                        }
                    })
                }

                else {
                    setBackground(e => {
                        return {
                            ...e,
                            navBackground: '',
                            itemList: "text-white text[16px]"
                        }
                    })
                }
            })

        }
    )
    const route = useRouter();
    const [background, setBackground] = useState<{[key: string]: string}>({navBackground: 'bg-blue-600', itemList: 'text-white text-[16px]'})
    return (
        <nav className={`fixed overflow-hidden w-full z-[99] flex justify-between items-center  ${background.navBackground} h-20`}>

            <Image className='' src={yellow.src} alt=' ABS' width={'100'} height={'100'} />
            <div>
                <ul className={`mx-5   flex space-x-6   items-center ${background.itemListcmd}`}>
                    <li className='hidden hover:py-2 hover:px-5 hover:bg-blue-900 hover:text-white sm:flex'>Pricing</li>
                    <li className='hidden hover:py-2 hover:px-5 hover:bg-blue-900 hover:text-white sm:flex'>Product</li>
                    <li className='hidden hover:py-2 hover:px-5 hover:bg-blue-900 hover:text-white sm:flex'>Solution</li>
                    <li className='hidden hover:py-2 hover:px-5 hover:bg-blue-900 hover:text-white sm:flex'>Customers</li>
                    <li className='hidden hover:py-2 hover:px-5 hover:bg-blue-900 hover:text-white sm:flex'>Resources</li>
                    <li className='hidden hover:py-2 hover:px-5 hover:bg-blue-900 hover:text-white sm:flex hover:py-2 hover:px-5 hover:bg-blue-900 hover:text-white' onClick={() => {route.push('login')}}>Login</li>
                    <li className='hidden hover:py-2 hover:px-5 hover:bg-blue-900 hover:text-white  sm:flex'>Order</li>
                    <span className='sm:hidden flex text-white sm:text-5xl text-2xl font-extrabold '><IconBs.BsList /></span>

                    <div>
                        <ul>
                            <li><IconBs.Bs0Circle /></li>
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>)
}