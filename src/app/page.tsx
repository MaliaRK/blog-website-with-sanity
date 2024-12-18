import React from 'react'
import Home from './home/page'

const page = () => {
  return (
    <div className='bg-[#212020] text-[#dbd9d9] max-w-[1500px] mx-auto'>
        <Home/>
    </div>
  )
}

export default page


// import { client } from "@/sanity/lib/client"

// export default async function Nextjs() {
//     const data = await client.fetch(`*[_type == "homePage"]{
//         mainHeaidng,
//         heaidng,
//         paragraph,
//         image,
//         button
//     }[0]`
// )

// console.log(data);

//     return (
//         <div>
//             <h2>{data.mainHeaidng}</h2>
//             <h3>{data.heaidng}</h3>
//             <p>{data.paragraph}</p>
//             <button>{data.button}</button>
//         </div>
//     )
// }
