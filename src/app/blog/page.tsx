import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'
import BlogCard from '../components/blogCard'
import Link from 'next/link'
// import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'


// Define Blog interface
interface Blog {
    image: any;
    title: string;
    summary: string;
    slug: string;
}

// Home component as a Server Component
const Home = async () => {
    // Query to fetch blogs from Sanity
    const query = `
    *[_type == "post"] | order(_createdAt asc)[0..2] {
        image,
        title,
        summary,
        "slug": slug.current
    }`;

    // Fetch blogs from Sanity
    const blogs: Blog[] = await client.fetch(query);

    return (
        <div>
            <h1 className='text-center text-2xl text-[#6EEB83]'><strong><u>Welcome To My Blog</u></strong></h1>
            <p className='mt-8 md:mt-14'>In this space, I&apos;ll be discussing a variety of IT-related topics, where we can
                interact with individuals and groups alike. The blog will focus on sharing
                knowledge-based content, including the latest updates in technology. My goal is to
                keep us connected in the ever-evolving tech world and create a community
                where we can learn from each other.</p>
            <h3 className='text-xl text-center mt-10 text-[#6EEB83]'><u>*--- Most Recent Posts ---*</u></h3>
           {/* mjhe yaha aos zoom in use krna h */}
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
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
    // Fetch all blog slugs to generate paths for each
    const query = `
    *[_type == "post"] {
        "slug": slug.current
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
