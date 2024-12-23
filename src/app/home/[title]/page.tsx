// import { client } from "@/sanity/lib/client"

// interface Params {
//     params: {
//         title: string;
//     }
// }

// interface Data {
//         title: string;
//         paragraph: string;
//         image: string;
//         button1: string;
//         button2: string;
//         mainHeading: string;
//         heaidng: string;
//         author: string;
//         date: string;
//     }


// export default async function Nextjs({params}: Params) {
//     const {title} = params;
//     console.log(title);

//     const data: Data = await client.fetch(`*[_type == "homePage"]`)

//     console.log(data);

//     return (
//         <div>
//             <h2>{data.mainHeading}</h2>
//             <h3>{data.heaidng}</h3>
//             <p><strong>{data.author}</strong></p>
//             <p>{data.date}</p>
//             <p>{data.paragraph}</p>
//             <button>{data.button1}</button>
//             <button>{data.button2}</button>
//         </div>
//     )
// }
