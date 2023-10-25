'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import matrix from '@/public/medias/dot-matrix-pattern.svg'
import wave from '@/public/medias/svgs/wave.svg'
import eat from '@/public/medias/Cakes/eater.png'
import * as IconFa from 'react-icons/fa'
import * as IconMd from 'react-icons/md'
import * as IconBs from 'react-icons/bs'
import ReactGlobe from 'react-globe'
import Surprise from '@/public/medias/surprise.jpg'
import Surpise from '@/public/medias/Cakes/surpise.jpeg'
import Package from '@/public/medias/pacake.jpg'
import Delivery from '@/public/medias/Delivery.jpg'
import cart from '@/public/medias/cart.webp'
import Safe from '@/public/medias/safeDelivery.jpg'
import pace from '@/public/medias/atYourOwnPace.jpg'
import AnimatePageOnScroll from '@/app/component/animate/observer'
import cakeLogo from '@/public/medias//Cakes/cakeLogo.webp'
import surp from '@/public/medias/Cakes/surprise.png'
import yellow from '@/public/medias/ABSICON.png'
import {SlideUp} from './component/slideUpImage'
import wave2 from '@/public/medias/svgs/wave2.svg'
import wave3 from '@/public/medias/svgs/wave3.svg'
import {cake1, cake11, cake12, cake22} from './component/Dynamics/DynamicsImports'
import {CarouselService, CarouselServiceProps} from './component/Carousel/ServiceCarousel'
import RatingCard from './component/Cards/userFeedback'
import {useRouter} from 'next/navigation'
import Footer from './component/Navs/footer'
import Navbar from './component/Navs/navbar'
import ServiceSlide from './component/Template/ServicesSlide'

export default function Home() {
  const route = useRouter();

  const [background, setBackground] = useState<{[key: string]: string}>({navBackground: '', itemList: 'text-white text-[16px]'})


  useEffect(() => {
    AnimatePageOnScroll(['root_abs_1', 'root_abs_2', 'root_abs_3', 'root_abs_4', 'root_abs_5', 'root_abs_6']);
  }, []);


  //console.log(yellow.src, 'PIOIOLOXY')
  return (
    <div className='bg-white'>
      <Navbar />
      <div className='z-10 h-screen w-full flex relative  '>
        <div style={{background: `url(${wave.src}) repeat-y`, backgroundSize: 'cover', backgroundPosition: '50% 50%'}} className={`z-10 mb-[500px] w-full  h-[1500px] absolute top-0 buttom-0`}>
          <div className='h-[150px] w-[200px]'>
          </div>

          <div className='flex justify-center items-center '>
            <div className='text-center lg:text-left mb-[100px] font-[Montserrat, Helvetica, Poppin,Roboto, sans-serif] font-bold items-center  py-10 px-2 xl:px-10 text-6xl sm:text-7xl text-teal-100 '>
              <div className='md:hidden lg:block sm:block xl:block'>
                <h1> Welcome To AbikeSurprise,</h1>
                <h1 className='text-decorate-pink'>Your Element Of  Design</h1>
                <h1>And Surprise</h1>
              </div>
              <div className='w-full md:block lg:hidden  xl:hidden hidden'>
                <h1> Welcome To AbikeSurprise,
                  Your Element Of  Design
                  And Surprise</h1>
              </div>
              <div className='flex justify-center xl:justify-between  '>
                <div className='flex lg:text-center justify-between w-3/5  space-x-2 text-[18px] mt-10'>
                  <button className='text-white h-10 mt-5 py-2 px-1 rounded-md bg-indigo-600 w-2/3'>
                    Login
                  </button>
                  <button className='text-white h-10 mt-5 py-2 px-1 rounded-md bg-indigo-600 w-2/3 w-2/3'>
                    Sign up
                  </button>
                </div>
              </div>
            </div>
            <div className=' text-white mt-[-100px] bg-gradient-to-r from-blue  to-fuchsia-700 curved'>
              <Image src={eat.src} className='p-6 xl:block hidden ' alt={'cake'} layout='' width='800' height='400' />
            </div>
            {/* <svg width="" height="352" viewBox="0 0 1179 1152" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M334.326 882.433C286.784 840.832 249.565 788.747 225.608 730.292C201.651 671.837 191.612 608.613 196.284 545.613C200.956 482.612 220.21 421.56 252.528 367.279C284.845 312.997 329.339 266.972 382.497 232.838C435.656 198.704 496.022 177.396 558.828 170.597C621.635 163.798 685.162 171.694 744.393 193.661C803.625 215.629 856.938 251.066 900.123 297.174C943.307 343.282 975.181 398.799 993.227 459.34" stroke="black"></path> <path d="M1004.79 648.64C1013.37 664.833 1015.93 679.803 1012.64 693.203C1009.34 706.602 1000.18 718.513 985.151 728.551C955.073 748.642 902.782 760.368 833.826 762.389C764.893 764.409 681.994 756.653 594.053 739.949C506.113 723.245 416.474 698.228 334.785 667.593C253.093 636.957 182.462 601.867 130.485 566.107C104.497 548.227 83.6757 530.526 68.4327 513.478C53.1864 496.426 43.5431 480.052 39.8701 464.829C36.2015 449.624 38.5536 435.84 46.684 423.775C54.8252 411.694 68.7879 401.296 88.4086 392.947C127.656 376.246 187.89 368.446 262.665 370.429" stroke="#050505"></path> <path d="M744.537 203.285C799.611 142.519 849.675 104 888.524 92.3818C907.933 86.5773 924.054 87.6324 936.552 95.1925C949.055 102.756 958.037 116.891 963.03 137.469C973.02 178.646 966.532 243.539 944.284 324.159C922.042 404.757 885.047 497.461 837.876 590.785C790.707 684.108 735.44 773.941 678.925 849.156C622.405 924.378 567.139 981.646 519.979 1013.9C496.398 1030.02 475.396 1039.52 457.537 1042.34C439.696 1045.16 425.016 1041.31 413.989 1030.79C402.942 1020.24 395.739 1003.16 392.55 980.179C389.362 957.207 390.194 928.403 395.163 894.489" stroke="#050505"></path> <path d="M838.407 907.01C820.956 952.118 791.357 980.223 752.688 988.55C713.993 996.883 667.503 985.135 617.98 954.392C568.464 923.652 517.759 875.063 471.093 813.609C424.428 752.157 383.499 680.076 352.52 604.785C321.541 529.492 301.636 453.721 294.846 385.27C288.056 316.813 294.634 258.189 313.854 215.404C333.065 172.639 364.201 147.259 404.047 141.774C443.925 136.285 491.182 150.907 540.967 184.251" stroke="#050505"></path></svg> */}
          </div>

        </div>

      </div>


      <main className={` h-full w-full overflow-hidden  bg-white  block  justify-center `}>
        <ul id='root_abs_1' className='z-20 mt-[50px] mb-[100px]'>
          <li className='flex justify-around'>
            <div className='z-20 bg-indigo-100  rounded-md w-[150px] h-[150px]'>
              <h1 className='bg-indigo-700 rounded-t flex text-center justify-center '>Cake</h1>
              <div>
                <div className='text-indigo-800 flex justify-center items-center mt-6 ml-5'>
                  <Image alt='parfait' src={cakeLogo} width={'100'} height={'80'} />
                </div>
              </div>
            </div>


            <div className='z-20 bg-indigo-100  rounded-md w-[150px] h-[150px]'>
              <h1 className='bg-indigo-700 rounded-t flex text-center justify-center '>Cake</h1>
              <div>
                <div className='text-indigo-800 flex justify-center items-center mt-6 ml-5'>
                  <Image alt='parfait' src={cakeLogo} width={'100'} height={'80'} />
                </div>
              </div>
            </div>


            <div className='z-20 bg-indigo-100  rounded-md w-[150px] h-[150px]'>
              <h1 className='bg-indigo-700 rounded-t flex text-center justify-center '>Cake</h1>
              <div>
                <div className='text-indigo-800 flex justify-center items-center mt-6 ml-5'>
                  <Image alt='parfait' src={cakeLogo} width={'100'} height={'80'} />
                </div>
              </div>
            </div>



            <div className='z-20 bg-indigo-100  rounded-md w-[150px] h-[150px]'>
              <h1 className='bg-indigo-700 rounded-t flex text-center justify-center '>Cake</h1>
              <div>
                <div className='text-indigo-800 flex justify-center items-center mt-6 ml-5'>
                  <Image alt='parfait' src={cakeLogo} width={'100'} height={'80'} />
                </div>
              </div>
            </div>



            <div className='z-20 bg-indigo-100  rounded-md w-[150px] h-[150px]'>
              <h1 className='bg-indigo-700 rounded-t flex text-center justify-center '>Cake</h1>
              <div>
                <div className='text-indigo-800 flex justify-center items-center mt-6 ml-5'>
                  <Image alt='parfait' src={cakeLogo} width={'100'} height={'80'} />
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div id='root_abs_2' className='z-10  relative h-full w-full' style={{background: `url(${wave2.src}) repeat-y`, backgroundPosition: '50% 50%', backgroundSize: 'cover'}}>
          <div className='absolute w-full h-full z-0' style={{background: `url(${wave3.src}) repeat-y`, backgroundPosition: '50% 50%', backgroundSize: 'cover'}} >
          </div>
          <div className='relative  xl:flex lg:space-y-10  '>
            <div className='w-full'>
              <div className='px-5 w-full flex justify-center   h-full   w-full '>
                <div className='relative text-amber-300 bg-clip-text text-transparent space-y-1  lg:mt-[300px] sm:top-[450px] sm:ml-0  w-[100%]   sm:preview_small_text preview-text  items-center  text-white text-purple-800'>
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
                </div>
              </div>
            </div>
            <div className='xl:flex z-10 hidden overflow-hidden  sm:px-[150px] px-5 py-10 items-center justify-center w-full h-full ' style={{marginTop: '590px', background: `url(${matrix.src})`, backgroundRepeat: `repeat`}}>
              <SlideUp />
            </div>
          </div>
        </div >
      </main >

      <div className='mt-10 flex  sm:justify-center  sm:px-10 bg-fuchsia-100'>

        <div className='ml-1  relative mt-[300px] space-y-[120px]'>
          <div className='hidden absolute w-full h-full  '>
            <div className='items-center flex flex-col  justify-left sm:justify-center items-center'>
              <div className='w-20 h-20 flex items-center justify-center text-center rounded-full  top-10 left-10 bg-blue-500 text-cyan-100 text-5xl'>1</div>
              <div className='bg-blue-500 h-[100px] w-10 '>
              </div>
            </div>
          </div>

          <div className='flex md:justify-center '>
            <div className='z-1 absolute bg-purple-950  h-full sm:w-2 w-1 '>
            </div>
            <div className='relative '>
              <div className='absolute space-y-[500px] right-[-40px]'>
                <div id='root_abs_3' className=' left  z-10 w-10 h-10 sm:w-20 sm:h-20 flex items-center justify-center text-center rounded-full  top-10 left-10 bg-blue-950 text-cyan-100 text-5xl'>1</div>
                <div id='root_abs_4' className=' left  z-10 w-10 h-10 sm:w-20 sm:h-20 flex items-center justify-center text-center rounded-full  top-10 left-10 bg-blue-950 text-cyan-100 text-5xl'>2</div>
                <div id='root_abs_5' className=' left  z-10 w-10 h-10 sm:w-20 sm:h-20 flex items-center justify-center text-center rounded-full  top-10 left-10 bg-blue-950 text-cyan-100 text-5xl'>3</div>
                <div id='root_abs_6' className=' left  z-10 w-10 h-10 sm:w-20 sm:h-20 flex items-center justify-center text-center rounded-full  top-10 left-10 bg-blue-950 text-cyan-100 text-5xl'>4</div>
              </div>
            </div>
          </div>


          <div id='root_abs_3' className='flex justify-center w-full items-center '>
            <div className='sm:w-4/5 w-full lg:w-full xl:w-1/2 md:flex items-center md:space-x-[100px] sm:justify-around justify-center '>
              <Image src={Surpise.src} className='rounded-md' alt='image' height={300} width={300} />
              <div className='w-full lg:w-2/5 xl:w-2/5'> {/* Add padding to fill the width */}
                <h1 className='font-[apple,Arial,Helvitica] font-extrabold sm:text-3xl text-2xl mt-12 bg-gradient-to-r from-purple-900 via-purple-950 via-purple-950 to-violet-900 bg-clip-text text-transparent'>We Craft Unforgettable Surprise Experiences</h1>
                <p className='text-black  text-[15px] mt-1'>At ABS, we are passionate about turning ordinary moments into extraordinary memories. We specialize in crafting unforgettable surprise experiences through our wide range of products and services. Our dedicated team is committed to adding joy, excitement, and a touch of magic to your celebrations and special occasions.</p>
                <button className='my-10 py-2 px-8 rounded-md font-black bg-gradient-to-r from-purple-800 via-purple-900 to-purple-900 text-white'>Explore Our Service!!</button>
                <h1><span className='rotate-180 text-[20px] text-black'></span></h1>
              </div>
            </div>
          </div>


          <div id='root_abs_4' className='flex justify-center w-full items-center '>
            <div className='sm:w-4/5 w-full lg:w-full xl:w-1/2 md:flex items-center md:space-x-[100px] sm:justify-around justify-center '>
              <Image src={Delivery.src} className='rounded-md' alt='image' height={300} width={300} />
              <div className='w-full lg:w-2/5 xl:w-2/5'> {/* Add padding to fill the width */}
                <h1 className='font-[apple,Arial,Helvitica] font-extrabold sm:text-3xl text-2xl mt-12 bg-gradient-to-r from-purple-900 via-purple-950 via-purple-950 to-violet-900 bg-clip-text text-transparent'>Ordering Surprises with ABS?</h1>
                <p className='text-black  text-[15px] mt-1'>At ABS, we've made the art of ordering surprises simple and delightful. When you log in to our platform, you unlock a world of memorable experiences just waiting to be discovered. From surprise gift packages for loved ones to special occasion celebrations, it's all at your fingertips. Explore the easy process of placing an order with ABS and elevate your moments with a touch of magic. Discover the joy of creating unforgettable memories today..</p>
                <button className='my-10 py-2 px-8 rounded-md font-black bg-gradient-to-r from-purple-800 via-purple-900 to-purple-900 text-white'>Give It A Try</button>
                <h1><span className='rotate-180 text-[20px] text-black'></span></h1>
              </div>
            </div>
          </div>

          <div id='root_abs_5' className='flex justify-center w-full items-center '>
            <div className='sm:w-4/5 w-full lg:w-full xl:w-1/2 md:flex items-center md:space-x-[100px] sm:justify-around justify-center '>
              <Image src={cart.src} className='rounded-md' alt='image' height={300} width={300} />
              <div className='w-full lg:w-2/5 xl:w-2/5'> {/* Add padding to fill the width */}
                <h1 className='font-[apple,Arial,Helvitica] font-extrabold sm:text-3xl text-2xl mt-12 bg-gradient-to-r from-purple-900 via-purple-950 via-purple-950 to-violet-900 bg-clip-text text-transparent'>We Offer Lit Packaging</h1>
                <p className='text-black  text-[15px] mt-1'>At ABS, we understand that well-packaging is an essential part of creating exceptional surprise experiences. Our commitment to detail extends to the art of presentation, ensuring that each surprise package is elegantly and securely wrapped. We take pride in the exquisite well-packaging of our products, adding an extra layer of delight to your special moments. Explore the thought and care we put into making every unboxing a memorable experience. Discover how our well-packaged surprises enhance the joy and magic of your celebrations and occasions...</p>
                <button className='my-10 py-2 px-8 rounded-md font-black bg-gradient-to-r from-purple-800 via-purple-900 to-purple-900 text-white'>Order For Lit Package Today!!</button>
                <h1><span className='rotate-180 text-[20px] text-black'></span></h1>
              </div>
            </div>
          </div>

          <div id='root_abs_6' className='flex justify-center w-full items-center '>
            <div className='sm:w-4/5 w-full lg:w-full xl:w-1/2 md:flex items-center md:space-x-[100px] sm:justify-around justify-center '>
              <Image src={Safe.src} className='rounded-md' alt='image' height={300} width={300} />
              <div className='w-full lg:w-2/5 xl:w-2/5'> {/* Add padding to fill the width */}
                <h1 className='font-[apple,Arial,Helvitica] font-extrabold sm:text-3xl text-2xl mt-12 bg-gradient-to-r from-purple-900 via-purple-950 via-purple-950 to-violet-900 bg-clip-text text-transparent'>Safe Delivery by ABS</h1>
                <p className='text-black  text-[15px] mt-1'>

                  At ABS, we're dedicated to ensuring your deliveries are secure and worry-free. Our commitment is to provide dependable, safe, and timely delivery services. Whether it's gifts or essentials, your shipments are handled with utmost professionalism and care. Trust ABS for Safe Delivery and enjoy peace of mind.</p>
                <button className='my-10 py-2 px-8 rounded-md font-black bg-gradient-to-r from-purple-800 via-purple-900 to-purple-900 text-white'>Give it try</button>
                <h1><span className='rotate-180 text-[20px] text-black'></span></h1>
              </div>
            </div>
          </div>


        </div>
      </div>












      <div className='mt-[100px] lg:px-[10%] md:px-10 rounded-md '>
        <div className='bg-purple-950 w-full rounded-md py-10 block xl:flex sm:flex sm:justify-around items-center  '>
          <div className='w-full flex items-center justify-center '>
            <Image src={Surprise.src} className='w-full sm:w-[300px] rounded-md  object-scale-down object-cover sm:mx-10' width={300} height={250} alt={"surpreise"} />
          </div>

          <div className='mx-10 rounded-md  overflow-x-hidden sm:w-[90%] y-10 px-10 bg-white'>
            <h1 className='z-30 font-[apple,Arial,Helvitica] font-extrabold sm:text-3xl text-2xl   bg-gradient-to-r from-purple-900 via-purple-950 via-purple-950 to-violet-900 bg-clip-text text-transparent '>Surprises Beyond Imagination</h1>
            <p className='text-black w-full lg:w-full sm:w-3/5 md:w-3/5 text-[13px] mt-1'>

              At AbikeSurprise, we redefine delight. Our pastries and cakes are not just sweet treats; they're exquisite masterpieces, crafted to make your taste buds dance.

              Our bespoke surprise packages promise moments of pure joy and unforgettable memories. We specialize in keeping secrets and revealing wonders.

              Experience the magic of AbikeSurprise. Let's create lasting memories together."

              This version is shorter and focuses on the core elements you mentioned.  </p>
            <button className='my-10 py-2 px-8 rounded-md  font-black bg-gradient-to-r from-purple-800 via-purple-900 to-purple-900 text-white'>Explore Our Service </button>
            <h1><span className='rotate-180 text-[20px] text-black'></span></h1>
          </div>
          {/* <Image src={Surprise.src} className='w-[250px] sm:w-[300px]rounded-md  object-scale-down object-cover  mx-10' width={300} height={250} alt={"surpreise"} /> */}
        </div>

        <h1 className='my-10 bg-white h-full'>
          <h1 className='text-[16px] font-[open-sans,Popins,Helvitca,apple,sans-serif] flex text-center justify-center sm:font-bold items-center sm:sm:text-3xl text-2xl bg-gradient-to-r from-purple-900 via-green-900  via-purple-950 to-purple-950 bg-clip-text text-transparent '><span className='text-purple-900 px-10'><span className='hidden'><IconBs.BsEmojiSunglassesFill /></span></span>Meet Us  Today And Found Out About Our Service </h1>
        </h1>
      </div>

      <div>
        <div className='px-[10%]'>
          <div className='rounded-md h-screen bg-gradient-to-r from-emerald-900 to-yellow-900 '>

            <div className="flex flex-col lg:flex-row justify-center lg:space-x-[10px] p-3 items-center ">
              <div className="w-full lg:w-1/2  p-4">
                <Image src={cake12.src} height={'0'} width={350} alt='img' />
              </div>
              <div className="w-full lg:w-1/2  p-4">
                <h1>
                  At ABS, we're   all about delivering delicious cakes to sweeten your special moments. Our cakes are edible works of art, baked with love and designed to delight your taste buds. With a wide range of flavors and sizes, we're here to add a layer of sweetness to your celebrations. From birthdays to anniversaries, our cakes are perfect for any occasion. Experience the joy of effortless cake delivery with ABS, where every slice is a slice of happiness
                </h1 >
                <button className='my-10 py-2 px-8 rounded-md font-black bg-gradient-to-r from-purple-800 via-purple-900 to-purple-900 text-white'>Give it try</button>

              </div>
            </div>
            <ul>
              <li className='text-purple-900 rounded shadow-2xl bg-yellow-500'>Cake</li>
            </ul>
          </div>
        </div>

        <ServiceSlide />


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
