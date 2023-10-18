'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import matrix from '@/public/medias/dot-matrix-pattern.svg'
import * as IconFa from 'react-icons/fa'
import * as IconMd from 'react-icons/md'
import * as IconBs from 'react-icons/bs'
import Surprise from '@/public/medias/surprise.jpg'
import yellow from '@/public/medias/ABSICON.png'
import {SlideUp} from './component/slideUpImage'
import {cake1, cake22} from './component/Dynamics/DynamicsImports'
import {CarouselService, CarouselServiceProps} from './component/Carousel/ServiceCarousel'
import RatingCard from './component/Cards/userFeedback'
import {useRouter} from 'next/navigation'
import Footer from './component/Navs/footer'

export default function Home() {
  const route = useRouter();
  const [curentServiceIndex, setCurrentServiceIndex] = useState<number>(0)
  const [background, setBackground] = useState<{[key: string]: string}>({navBackground: '', itemList: 'text-white text-[16px]'})
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
  const currentService = useState<CarouselServiceProps | undefined>()

  useEffect(

    () => {
      //console.log(currentService)
      const UpdateIndex = setInterval(() => {setCurrentServiceIndex(e => {const number = e + 1; if(number > Services.length - 1) return 0; return number}); currentService[1](Services[curentServiceIndex])}, 5000);
      // //console.log(curentServiceIndex + ' 00', currentService, 'Dreaming')
      // //console.log(currentService[0] + 'drmming')
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
      return () => clearInterval(UpdateIndex);
    }
    , [curentServiceIndex, currentService]
  )
  //console.log(yellow.src, 'PIOIOLOXY')
  return (
    <div className='bg-white'>
      <main className={`h-full w-full flex  bg-white h-screen block  justify-center `}>
        <div className='h-full w-full' style={{background: `linear-gradient(#564588, #6a5e8e,#8e65c0`}}>
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
          </nav>

          <div className=' sm:flex lg:space-y-10  '>
            <div className='w-full'>

              <div className='px-5 w-full flex   h-full   w-full '>
                <div>
                  {/* <div className='bg-gradient-to-r from-amber-700 via-purple-500 to-yellow-700 border-full w-10 h-3'></div> */}
                  {/* <div className='w-1 animate-[propelY_5s_infinite] h-[400px] bg-gradient-to-r from-amber-600 via-yellow-500 to-purple-900'> */}
                  {/* </div> */}
                </div>

                <div className='bg-gradient-to-r from-purple-800 via-amber-300 to-amber-900 bg-clip-text text-transparent space-y-1  lg:mt-[300px] sm:top-[200px] sm:mt-0  w-[100%]   sm:preview_small_text preview-text  items-center  text-white text-purple-800'>
                  <h1 className='w-full '>
                    <span className="after:absolute after:content-[''] ''' after:bottom-0 after:left-0 after:bg-purple-700 after:rounded-full">Welcome to </span>{" "}
                    <span className="text-amber-500 relative inline-block text-yellow-300 after:animate-[propel_5s_infinite] after:absolute after:content-[''] ''' after:bottom-0 after:left-0 after:bg-purple-300 after:rounded-full after:transform "><h1 className=' text-blue-500'>AbikeSurprise</h1> </span> {" "}
                  </h1>
                  <h1>
                    Were  {" "}
                    <span className="relative inline-block text-yellow-500 after:absolute after:content-[''] ''' after:animate-[propel_15s_infinite] after:bottom-0 after:left-0 after:bg-yellow-300 after:rounded-full after:transform ">
                      <div className='font-[cursive] font-[oblique]'>
                        Love {' '}
                      </div> {' '}
                    </span> {' '}
                    Is Shared
                  </h1>
                  <h1 className='flex flex-wrap space-x-3 w-full'>
                    <p>And</p>{' '}
                    <span className="relative inline-block text-yellow-30 after:absolute after:content-[''] ''' after:animate-[propel_15s_infinite_reverse] after:bottom-0 after:left-0 after:bg-yellow-300 after:rounded-full after:transform flex text-yellow-500 sm:text-[59.2px] text-[50px] font-[cursive] font-[oblique]">Celebration </span> <span className='text-yellow-300'><IconMd.MdCake /></span>{" "}
                  </h1>

                  <span className='no_wrap'>
                    Meets {" "}
                    <span className="relative inline-block text-yellow-30 after:absolute after:content-[''] ''' after:animate-[propel_15s_infinite_reverse] after:bottom-0 after:left-0 after:bg-yellow-300 after:rounded-full after:transform ">Sweetness</span>{" "}

                  </span>


                  {/* </h1> */}
                  <div className='flex justify-between w-3/5  space-x-2 text-[18px] mt-10-*'>
                    <button className='mt-5 py-2 px-1 rounded-md bg-yellow-300 w-2/3'>
                      Login
                    </button>
                    <button className='mt-5 py-2 px-1 rounded-md bg-yellow-300 w-2/3 w-2/3'>
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex lg:top-[670px] sm:px-[150px] px-5 py-10 items-center justify-center w-full ' style={{background: `url(${matrix.src})`, backgroundRepeat: `repeat`}}>
              <SlideUp />
            </div>
          </div>
        </div >
      </main >
      <div className='h-[120px]'></div>
      <div className='mt-[100px] bg-white h-screen xl:ms-40'>
        <h1 className='font-[apple,Arial,Helvitica] font-extrabold sm:text-3xl text-2xl mt-12   bg-gradient-to-r from-purple-900 via-purple-950 via-purple-950 to-violet-900 bg-clip-text text-transparent '>What Can We Offer You ?</h1>
        <p className='text-black w-3/5 sm:w-2/5 text-[15px] mt-1'>At ABS, we are passionate about turning ordinary moments into extraordinary memories. We specialize in crafting unforgettable surprise experiences through our wide range of products and services. Our dedicated team is committed to adding joy, excitement, and a touch of magic to your celebrations and special occasions.</p>
        <button className='my-10 py-2 px-8 rounded-md  font-black bg-gradient-to-r from-purple-800 via-purple-900 to-purple-900 text-white'>Explore Our Service </button>
        <h1><span className='rotate-180 text-[20px] text-black'></span></h1>
      </div>

      <div className='mt-[-50vh]'></div>
      <div className='sm:px-2 rounded-md '>
        <div className='bg-purple-950 w-full rounded-md py-10 block sm:flex sm:justify-around items-center  '>
          <Image src={Surprise.src} className='w-full sm:w-[300px] rounded-md  object-scale-down object-cover  sm:mx-10' width={300} height={250} alt={"surpreise"} />

          <div className='mx-10 rounded-md  overflow-x-hidden sm:w-[90%] y-10 px-10 bg-white'>
            <h1 className=' font-[apple,Arial,Helvitica] font-extrabold sm:text-3xl text-2xl   bg-gradient-to-r from-purple-900 via-purple-950 via-purple-950 to-violet-900 bg-clip-text text-transparent '>What Can We Offer You ?</h1>
            <p className='text-black w-full lg:w-full sm:w-3/5  text-[13px] mt-1'>At ABS, we are passionate about turning ordinary moments into extraordinary memories. We specialize in crafting unforgettable surprise experiences through our wide range of products and services. Our dedicated team is committed to adding joy, excitement, and a touch of magic to your celebrations and special occasions.          </p>
            <button className='my-10 py-2 px-8 rounded-md  font-black bg-gradient-to-r from-purple-800 via-purple-900 to-purple-900 text-white'>Explore Our Service </button>
            <h1><span className='rotate-180 text-[20px] text-black'></span></h1>
          </div>
          {/* <Image src={Surprise.src} className='w-[250px] sm:w-[300px]rounded-md  object-scale-down object-cover  mx-10' width={300} height={250} alt={"surpreise"} /> */}
        </div>

        <h1 className='my-10 bg-white h-full'>
          <h1 className='text-[16px] font-[open-sans,Popins,Helvitca,apple,sans-serif] flex text-center justify-center sm:font-bold items-center sm:sm:text-3xl text-2xl bg-gradient-to-r from-purple-900 via-green-900  via-purple-950 to-purple-950 bg-clip-text text-transparent '><span className='text-purple-900 px-10'><span className='hidden'><IconBs.BsEmojiSunglassesFill /></span></span>Meet Us  Today And Found Out About Our Service </h1>
        </h1>

        <div className='overflow-hidden' >
          <CarouselService currentDisplay={currentService[0]} />
        </div>


        <div className='mt-10 py-[200px] px-10 rounded-md  bg-purple-900  flex justify-center items-center  mb-20 '>
          <div className='lg:flex judtify-center items-center h-[600px] '>
            <h1 className='preview-text texxt-center'>Join Thousands in Sweet Celebrations!</h1>

            <div className='z-1 relative lg:w-2/3'>
              <div className="absolute z-10  inset-x-0 top-0 h-[130px] bg-gradient-to-b bg-gradient-to-b from-purple-900 via-purple-700 via-purple-400to-transparent"></div>
              <div className="absolute z-10  inset-x-0 fixed top-[530px] h-[130px] bg-gradient-to-t bg-gradient-to-r from-purple-900 via-purple-700 via-purple-400to-transparent"></div>
              <div className='flex justify-center items-center '>
                <div className='h-[600px] relative z-0 py-10 grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 lg:gap-y-4 gap-y-4 sm:gap-4 lg:gap-4 xl:gap-4 shadow-2xl dont-show-scroll '>
                  <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /> <RatingCard /></div>
              </div>
            </div>
          </div>
        </div>





        <Footer />
      </div>
    </div >
  )
}
