import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-[10%_auto] p-5 md:h-screen items-center border-[2px] border-[#6EEB83] shadow-[#6EEB83] shadow-inner rounded-sm '>
      <div className='md:mx-auto flex justify-around mt-10 border-[1px] border-[#6EEB83] py-3 px-1 rounded-sm md:border-none md:block order-2 md:order-1'>
        <span className='text-black text-2xl bg-[#6EEB83] py-3 px-5 md:px-4 rounded-full md:ml-2'><strong><abbr title="Malia Raees">M</abbr></strong></span>
        <div className='md:mt-16 ml-4'><Image src="/search.svg" alt='search' width={40} height={40}></Image>
        <span>search</span></div>
        <div className='mt-4 md:mt-8 ml-1'><Image src="/trending_up.png" alt='trending' width={40} height={40} className='ml-2'></Image>
        <span>trending</span></div>
        <div className='md:mt-8'><Image src="/comment.svg" alt='comment' width={40} height={40} className='mx-auto'></Image>
        <span>comments</span></div>
        <div className='md:mt-8 ml-4'><Image src="/create.png" alt='create' width={40} height={40}></Image>
        <span className=''>create</span></div>
      </div>
      <div className='bg-[#6EEB83] absolute translate-x-32 w-0.5 h-[95%] hidden md:block'></div>
      <div className='mx-10 order-1 md:order-2'>
        <h1 className='text-center text-2xl text-[#6EEB83]'><strong><u>Welcome To My Blog</u></strong></h1>
        <p className='mt-8 md:mt-14'>In this space, I&apos;ll be discussing a variety of IT-related topics, where we can
          interact with individuals and groups alike. The blog will focus on sharing
          knowledge-based content, including the latest updates in technology. My goal is to
          keep us connected in the ever-evolving tech world and create a community
          where we can learn from each other.</p>
        <h3 className='text-lg mt-10 text-[#6EEB83]'><u>Posts Highligts..!</u></h3>
        <p className='mt-4'><strong>Next.js:</strong> Dive into modern React-based web development with powerful
          features like server-side rendering.</p>
        <p className='mt-6'><strong>TypeScript:</strong> Learn how this statically typed language enhances
          JavaScript for building scalable, reliable applications.</p>
        <p className='mt-6'><strong>Tailwind CSS:</strong> Explore the utility-first CSS framework that
          streamlines the process of designing responsive and clean UIs.</p>
        <p className='mt-6'><strong>ShadCN:</strong> Discover how this tool can optimize design and development
          workflows, especially in React apps.</p>
        <p className='mt-6'><strong>Sanity:</strong> Understand how this headless CMS allows for dynamic,
          customizable content management.</p>
      </div>
    </div>
  )
}

export default Home