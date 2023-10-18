"use client"
import React, {ReactNode, useState} from 'react';
import Image, {ImageProps} from 'next/image'
import * as Icons from 'react-icons/md'
import matrix from '@/public/medias/dot-matrix-pattern.svg'
import {cake22} from '../Dynamics/DynamicsImports';
import {Content} from 'next/font/google';



export interface CarouselServiceProps {
    content: string
    id?: string
    topic: string
    button: string
    image: string,
    transistionAnimation: DrawnAnimationTransistionTyped;
    NextService: (foward: boolean, backward: boolean) => void

}
export interface CaroselSwapProps {
    id: number
    current: ReactNode
    transistionAnimation: DrawnAnimationTransistionTyped
}
export type DrawnAnimationTransistionTyped = 'animate_[propel]' | 'animate-[propel-smoth-right_3s]' | 'animate-[propel-smoth-left_3s]'

export function CarouselService({currentDisplay}: {currentDisplay: CarouselServiceProps | undefined}) {
    // console.log(currentDisplay?.transistionAnimation, 'animaie')
    return <div className='relative'>
        <div id={currentDisplay?.id} className={`${currentDisplay?.transistionAnimation + ' '} px-[10%] sm:flex sm:flex-cols justify-around items-center`}>
            <div className=' bg-white xl:ms-40'>
                <h1 className='font-[apple,Arial,Helvitica] font-extrabold sm:text-3xl text-2xl mt-12 bg-gradient-to-r from-purple-900 via-purple-950 via-purple-950 to-violet-900 bg-clip-text text-transparent '>{currentDisplay?.topic}</h1>
                <p className='text-black w-full sm:w-3/5 text-[15px] mt-1'>{currentDisplay?.content}</p>
                <button className='my-10 py-2 px-8 rounded-md  font-black bg-gradient-to-r from-purple-800 via-purple-900 to-purple-900 text-white'>{currentDisplay?.button} </button>
            </div>
            <div className=' bg-gradient-to-r from-purple  via-purple-300 to-blue-300 radius'>
                <div className='w-full' style={{background: `url(${matrix?.src})`, backgroundRepeat: `repeat`}}>
                    <Image alt='cake' width={0} height={0} src={currentDisplay?.image ? currentDisplay.image : ""} layout='responsive' />
                </div>
            </div>
        </div>
        <div className='absolute items-center justify-between'>
            <span onClick={() => currentDisplay?.NextService(false, true)}><Icons.MdArrowLeft /></span>
            <span onClick={() => currentDisplay?.NextService(true, false)}><Icons.MdArrowRight /></span>
        </div>
    </div>
}

export function CaroselSwap({current, transistionAnimation, id}: CaroselSwapProps) {
    return <div className='relative'>
        <div id={id.toString()} className={`${transistionAnimation + ' '} px-[10%] sm:flex sm:flex-cols justify-around items-center`}>
            {current}
        </div>
    </div>
}