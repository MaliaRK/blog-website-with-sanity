import { client } from "@/sanity/lib/client"

interface Params {
    params: {
        paragraph: string;
        image: string;
        button: string;
        mainHeaidng: string;
        heaidng: string;
  }
}

export default async function Nextjs({params}: Params) {
    const {mainHeaidng} = await params;
    console.log(mainHeaidng);

    const data = await client.fetch(`*[_type == "homePage"]{
        mainHeaidng,
        heaidng,
        paragraph,
        image,
        button
    }[0]`
)

console.log(data);

    return (
        <div>
            <h2>{data.mainHeaidng}</h2>
            <h3>{data.heaidng}</h3>
            <p>{data.paragraph}</p>
            <button>{data.button}</button>
        </div>
    )
}