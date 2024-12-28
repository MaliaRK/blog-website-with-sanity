import { client } from '@/sanity/lib/client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image';
import {PortableText} from '@portabletext/react'
import { components } from '@/app/components/customComponents';

interface Post {
    title: string;
    image: any;
    summary: string;
    content: any;
    author: string;
    date: string;
}

export const revalidate = 10;   //seconds

const Blog = async ({ params: { slug } }: { params: { slug: string } }) => {
    const query = `*[_type == "post" && slug.current == "${slug}"]{
    title, image, summary, author, date, content}[0]`;

    const post: Post = await client.fetch(query);
    console.log(post);

    return (       
        <div className='bg-[#212020] text-[#dbd9d9] px-5 py-8 max-w-[1500px] mx-auto'>
            <h1 className='text-2xl font-serif text-center pb-8'><u>{post.title}</u></h1>
            <div className='md:flex justify-around gap-3 text-center md:text-left items-center mb-8 '>
                <Image src={urlFor(post.image).url()} alt={post.title} width={350} height={300} className='mx-auto' />
                <div>
                    <p className='mt-8 md:mt-0'>Author: <strong>{post.author}</strong></p>
                    <p className='my-8'>Release date: {post.date}</p>
                    <p>&quot;{post.summary}&quot;</p>
                </div>
            </div>
            <PortableText value={post.content} components={components} />
        </div>
        
    )
}
export default Blog;
