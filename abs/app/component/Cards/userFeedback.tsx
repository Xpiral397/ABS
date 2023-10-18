import React from "react";

import 'font-awesome/css/font-awesome.min.css';


export default function userFeedback({login}: {login?: boolean}) {
    return (
        <div className={`'sm:w-[350px]' bg-zinc-100 rounded-md `}>
            <div className="flex items-center justify-between px-5">
                <div className="flex items-center  px-1 py-1">
                    <div className="rounded-full bg-blue-900 h-12 w-12 ">
                        <h1 className="text-4xl text-white text-cener flex justify-center ">o</h1>
                    </div>
                    <div className="block  ms-1 -mb-2">
                        <h1 className="font-bold text-slate-950 font-[apple,poppins,Helvetica open-sans] text-[12px]">Olamide Sunday</h1>
                        <span className="flex text-[10px] text-slate-900">
                            <h1>Nigerial</h1>
                            <h1>Lagos</h1>
                        </span>
                    </div>
                </div>
                <div>
                    <span className="fa fa-star checked text-orange-500"></span>
                    <span className="fa fa-star checked text-orange-500"></span>
                    <span className="fa fa-star checked text-orange-500"></span>
                    <span className="fa fa-star checked text-orange-500"></span>
                    <span className="fa fa-star checked text-orange-500"></span>
                    <span className="fa fa-star checked text-orange-500"></span>
                </div>

            </div>
            <hr className="w-full mt-1" />
            <h1 className="text-slate-900 w-full px-5 py-2 text-[12px]">
                I just had the most amazing cake from [Bakery/App Name]! The taste was absolutely divine, and it exceeded my expectations. The cake was not only delicious but also beautifully presented.

                The delivery was on time, and the entire experience was hassle-free. I could be happier with my order.

                I highly recommend [Bakery/App Name] for anyone looking for a delightful cake and a wonderful experience. {'Id'} rate it 5 stars without a doubt!
            </h1>

        </div >)
}