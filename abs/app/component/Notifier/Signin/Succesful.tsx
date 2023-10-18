
'use client'

import {useRouter} from "next/navigation";
import {useState} from "react";
import Spin from "../../animate/spin";
import {MdDoneOutline} from "react-icons/md";

export function Succesfull({enable}: {enable: boolean}) {
    const [userInfo, setUserInfo] = useState(true);
    const route = useRouter()
    return (
        <div className="bg-[rgba(0,0,0,0.5)] w-full h-full flex z-10 absolute h-screen items-center text-center justify-center  ">


            {enable
                ?
                (<div className="py-10  mt-[200px] px-10 rounded-md bg-white  justify-center items-center relative ">
                    < div className='w-full text-green-500 flex items-center text-2xl space-x-10'>
                        <MdDoneOutline />
                        <h1> Registration Complete</h1>
                    </div>
                    <button onClick={() => {route.push('login')}} className='w-full mt-10 rounded-md px-2 py-2 bg-green-500'>Login</button>
                </div>)

                :
                <div className="relative flex justify-center items-center">
                    <Spin enable={!enable} />
                </div>
            }

        </div >
    )
}
