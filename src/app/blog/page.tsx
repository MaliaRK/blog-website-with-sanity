import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'
import BlogCard from '../components/blogCard'
import Link from 'next/link'

interface Blog {
    image: any;
    title: string;
    summary: string;
    slug: string;
}

const Home = async () => {
    const query = `
    *[_type == "post"] | order(_createdAt asc)[0..2] {
        image,
        title,
        summary,
        "slug": slug.current
    }`;

    const blogs: Blog[] = await client.fetch(query);

    return (
        <div>
            <h1 className='font-serif mx-auto mt-[70px] text-2xl text-center block md:hidden'><strong><u>Unleash Your Voice Through Blogging</u></strong></h1>
            <p className='mt-[20px] md:mt-[100px]'>In this space, I&apos;ll be discussing a variety of IT-related topics, where we can
                interact with individuals and groups alike. The blog will focus on sharing
                knowledge-based content, including the latest updates in technology. My goal is to
                keep us connected in the ever-evolving tech world and create a community
                where we can learn from each other.</p>
            <h3 className='text-xl text-center mt-10'><u>*--- Most Recent Posts ---*</u></h3>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:mx-10 mt-8'>
                {
                    blogs.map((blog) => {
                        return (
                            <Link href={`blog/${blog.slug}`} key={blog.slug}>
                                <BlogCard
                                image={<Image src={urlFor(blog.image).url()} alt={blog.title} width={100} height={40} className='w-full' />}
                                title={blog.title}
                                summary={blog.summary}
                                more= "read more"/>
                            </Link>
                        )
                    })
                }
            </section>
        </div>
    )
}

// Generate Static Params
export async function generateStaticParams() {
    const query = `
    *[_type == "post"] {
        "slug": slug.current, image, title, summary, content, author, date
    }`;
    const blogs = await client.fetch(query);

    // Return params for each blog
    return blogs.map((blog: { slug: string }) => ({
        slug: blog.slug,
    }));
}

// Revalidate every 10 seconds (ISR)
export const revalidate = 10;

export default Home;
