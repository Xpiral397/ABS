'use client'

import {useEffect, useState} from "react"
import {CarouselService, CarouselServiceProps} from "../Carousel/ServiceCarousel"
import {cake1, cake11, cake12, cake22} from "../Dynamics/DynamicsImports"

export default function ServiceSlide() {
    const currentService = useState<CarouselServiceProps | undefined>()
    const [curentServiceIndex, setCurrentServiceIndex] = useState<number>(0)
    const Services: Array<CarouselServiceProps> = [

        {
            topic: 'What Can We Offer You ',
            button: 'Explore Our Service',
            image: cake22.src,
            NextService(forward, backward) {
                if(forward) {
                    setCurrentServiceIndex(e => {const number = e + 1; if(number > Services.length - 1) return 0; return number})
                    currentService[1](Services[curentServiceIndex])
                }
                else {
                    setCurrentServiceIndex(e => {const number = e + 1; if(number == - 1) return Services.length - 1; return number})
                    currentService[1](Services[curentServiceIndex])
                }
            },
            transistionAnimation: 'animate-[propel-smoth-left_3s]',
            content: 'At ABS, we are passionate about turning ordinary moments into extraordinary memories. We specialize in crafting unforgettable surprise experiences through our wide range of products and services. Our dedicated team is committed to adding joy, excitement, and a touch of magic to your celebrations and special occasions.',
        },
        {
            topic: 'What Can We Offer You 2 ',
            button: 'Explore Our Service',
            image: cake22.src,
            NextService(forward, backward) {
                if(forward) {
                    setCurrentServiceIndex(e => {const number = e + 1; if(number > Services.length - 1) return 0; return number})
                    currentService[1](Services[curentServiceIndex])
                }
                else {
                    setCurrentServiceIndex(e => {const number = e + 1; if(number == - 1) return Services.length - 1; return number})
                    currentService[1](Services[curentServiceIndex])
                }
            },
            transistionAnimation: 'animate-[propel-smoth-right_3s]',
            content: 'At ABS, we are passionate about turning ordinary moments into extraordinary memories. We specialize in crafting unforgettable surprise experiences through our wide range of products and services. Our dedicated team is committed to adding joy, excitement, and a touch of magic to your celebrations and special occasions.',
        },
        {
            topic: 'What Can We Offer You ',
            button: 'Explore Our Service',
            image: cake22.src,
            NextService(forward, backward) {
                if(forward) {
                    setCurrentServiceIndex(e => {const number = e + 1; if(number > Services.length - 1) return 0; return number})
                    currentService[1](Services[curentServiceIndex])
                }
                else {
                    setCurrentServiceIndex(e => {const number = e + 1; if(number == - 1) return Services.length - 1; return number})
                    currentService[1](Services[curentServiceIndex])
                }
            },
            transistionAnimation: "animate-[propel-smoth-left_3s]",
            content: 'At ABS, we are passionate about turning ordinary moments into extraordinary memories. We specialize in crafting unforgettable surprise experiences through our wide range of products and services. Our dedicated team is committed to adding joy, excitement, and a touch of magic to your celebrations and special occasions.',
        }

    ]
    useEffect(

        () => {
            const UpdateIndex = setInterval(() => {setCurrentServiceIndex(e => {const number = e + 1; if(number > Services.length - 1) return 0; return number}); currentService[1](Services[curentServiceIndex])}, 5000);
            return () => clearInterval(UpdateIndex);
        }
        , [Services, curentServiceIndex]
    )
    return <div className='overflow-hidden' >
        <CarouselService currentDisplay={currentService[0]} />
    </div>
}