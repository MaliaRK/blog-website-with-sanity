import { client } from '@/sanity/lib/client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image';

interface Params {
    params: {
        slug: string;
    }
}

interface Post {
    title: string;
    image: any;
    summary: string;
    content: string;
    author: string;
    date: string;
}

const getPost = async (slug: string) => {

    const query = `
    *[_type == "post" && slug.current == "${slug}"][0]{
    title,
    image,
    summary,
    content,
    author,
    date
}`
    const post: Post = await client.fetch(query);
    return post;
}

const Blog = async ({params}: Params) => {
    console.log(params, "params")
    const post: Post = await getPost(params.slug);
    console.log(post);
  return (
    <div className='bg-[#212020] text-[#dbd9d9] max-w-[1500px] mx-auto'> 
        <h1>{post.author}</h1>
        {/* <Image src={urlFor(blog.image).url()} alt={blog.title} width={100} height={100}/>
        <strong>{blog.author}</strong>
        <p>{blog.date}</p>
        <p>{blog.summary}</p>
        <p>{blog.content}</p> */}
    </div>
  )
}

export default Blog;
