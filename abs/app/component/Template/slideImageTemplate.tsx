
import Image from "next/image"

export function ImageTemplate({key, url}: {key: number, url: string}) {

    return <div className="">
        {/* <div className="h-5 bg-purple-950 w-[250px] h-10 "><h1>Cake Rounded</h1></div> */}
        <Image src={url} height={100} width={100} alt="float.png" className="lg:p-6  transform lg:skew-y-6 lg:skew-x-2  duration-900 rounded-full object-cover hover:object-scale-down w-96 h-48" loading="lazy" />
    </div>
}