'use client'

import {ReactNode, useEffect, useState} from "react";
import {CaroselSwap, DrawnAnimationTransistionTyped} from "./ServiceCarousel";

export default function UseCarousel({itemsPayloads}: {itemsPayloads: Array<React.JSX.Element>}) {
    const [animationTransistion, setAnimationTransistion] = useState<DrawnAnimationTransistionTyped>('animate-[propel-smoth-left_3s]')
    const [currentItemsSelection, setCurentItemsSelection] = useState<React.JSX.Element>();
    const [curentServiceIndex, setCurrentServiceIndex] = useState<number>(0);
    useEffect(

        () => {
            //console.log(currentService)
            const UpdateIndex = setInterval(() => {
                setCurrentServiceIndex(e => {const number = e + 1; if(number > itemsPayloads.length - 1) return 0; return number});
                setCurentItemsSelection(itemsPayloads[curentServiceIndex])
                setAnimationTransistion(e => e == 'animate-[propel-smoth-left_3s]' ? 'animate-[propel-smoth-right_3s]' : 'animate-[propel-smoth-left_3s]')
            }, 15000);
            return () => clearInterval(UpdateIndex);

        }
        , [curentServiceIndex, curentServiceIndex]
    )

    return <div>
        <CaroselSwap id={curentServiceIndex} current={currentItemsSelection} transistionAnimation={animationTransistion} />
    </div>
}