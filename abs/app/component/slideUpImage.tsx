'use client'
import Image, {StaticImageData} from "next/image"
import {useEffect, useRef, useState} from "react"
import {cake1, cake10, cake11, cake12, cake13, cake14, cake15, cake16, cake17, cake18, cake19, cake2, cake20, cake3, cake4, cake5, cake6, cake7, cake8, cake9} from "./Dynamics/DynamicsImports"
import {ImageTemplate} from "./Template/slideImageTemplate"
import {clearInterval, setInterval} from "timers"


interface ImagesResponse {
    imagesUrls: Array<StaticImageData>
}

export function SlideUp() {
    const slideRef = useRef<HTMLElement>(null);
    const Images = [cake1, cake2, cake3, cake4, cake5, cake6, cake7, cake8, cake9, cake10, cake1, cake2, cake3, cake4, cake5, cake6, cake7, cake8, cake9, cake10, cake11, cake12, cake13, cake14, cake15, cake16, cake17, cake18, cake19, cake20, cake11, cake12, cake13, cake14, cake15, cake16, cake17, cake18, cake19, cake20];
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [images, setImages] = useState<ImagesResponse>({imagesUrls: []});

    useEffect(() => {


        const scrollUp = setInterval(() => {
            if(slideRef.current) {
                slideRef.current.scrollTop += .5;


                const {scrollTop, scrollHeight, clientHeight} = slideRef.current;
                if(scrollTop + clientHeight + 2 >= scrollHeight) {
                    slideRef.current.scrollTop = .5;
                }
            }
        }, 1);

        // Clear the intervals when the component unmounts
        return () => {

            clearInterval(scrollUp);
        };
    }); // Add an empty dependency array to ensure the effect runs only once

    return (
        <div className="sm:mt-0 mt-10 overflow-hidden lg:h-[130vh] h-[calc(30vh)] sm:mt-10 sm:h-[calc(40vh)] xl-mt-0 top-[100px]" ref={slideRef}>
            <div className="w-full gap-y-1 lg:gap-x-6 gap-x-1 grid grid-cols-2 xl:grid-cols-3 items-center">
                {Images.map((e, index) => {
                    return <ImageTemplate key={index} url={e.src} />;
                })}
            </div>
        </div>
    );
}
