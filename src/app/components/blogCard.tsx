import React from 'react'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'

interface Post {
    image: any;
    title: string;
    summary: string;
    slug: string;
  }

const BlogCard = (props: Post) => {
    // const query = `
    // *[_type == "post"]{
    //   image,
    //   title,
    //   summary,
    //   "slug": slug.current
    // }`
  
    // const posts: Post[] = await client.fetch(query);
    // console.log(posts);

  return (
    <div className='border-[1px] border-[#6EEB83] shadow-md shadow-[#6EEB83] p-3 hover:scale-105 duration-700 cursor-pointer'>
        {props.image}
        <h3 className='text-center'>{props.title}</h3>
        <p>{props.summary}</p>
        <h5 className='bg-[#6f94] hover:bg-[#6f95] p-3 text-center mt-2'>{props.slug}</h5>
    </div>
  )
}

export default BlogCard
