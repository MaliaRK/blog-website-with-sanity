import React from 'react'

interface Post {
    image: any;
    title: string;
    summary: string;
    link: any;
  }

const BlogCard = (props: Post) => {
  return (
    <div className='border-[1px] border-[#6EEB83] shadow-md shadow-[#6EEB83] p-3 hover:scale-105 duration-700 cursor-pointer'>
        {props.image}
        <h3 className='text-center'>{props.title}</h3>
        <p>{props.summary}</p>
        <h5 className='bg-[#6f94] hover:bg-[#6f96] p-3 text-center mt-2'>{props.link}</h5>
    </div>
  )
}

export default BlogCard
