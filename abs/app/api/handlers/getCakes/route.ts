
import {NextApiRequest, NextApiResponse} from 'next';
import path from 'path'
import fs from 'node:fs/promises'
import {NextResponse} from 'next/server';


// export async function GET(request: NextApiRequest, response: NextApiResponse) {
//     try {
//         const wrkDr = path.join(process.cwd(), 'public', 'medias', 'Cakes')
//         const readImageUrls = (await fs.readdir(wrkDr)).map((imageDir: string) => path.posix.join('@/public', 'medias', 'Cakes', imageDir))
//         return NextResponse.json({imagesUrls: readImageUrls}, {status: 200})
//     }
//     catch(error: any) {
//         return NextResponse.json({imagessUrls: [error] as Array<String>}, {status: 500})
//     }
// }