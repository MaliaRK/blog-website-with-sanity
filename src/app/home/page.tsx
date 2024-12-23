import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image'
import BlogCard from '../components/blogCard'
import React from 'react'

interface Post {
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
}`

  const posts: Post[] = await client.fetch(query);
  console.log(posts);

  return (
    <div className='grid grid-cols-1 md:grid-cols-[10%_auto] p-5 md:h-scree items-center border-[2px] border-[#6EEB83] shadow-[#6EEB83] shadow-inner rounded-sm '>
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
        <h3 className='text-lg text-center mt-10 text-[#6EEB83]'><u>*--- Most Recent Posts ---*</u></h3>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-12 mt-8'>
          {
            posts.map((post) => {
              return (
                <BlogCard key={post.slug}
                  image = {<Image src={urlFor(post.image).url()} alt={post.title} width={100} height={40} className='w-full'/>}
                  title = {post.title}
                  summary = {post.summary}
                  slug = {post.slug}
                />
              )
            })
          }
        </section>







        {/* <div className='border-[1px] border-[#040704] shadow-md shadow-[#6EEB83] p-3 hover:scale-105 duration-700 cursor-pointer'>
              <Image src={urlFor(post.image).url()} alt={post.title} width={40} height={40}/>
              <h3 className='text-center'>{post.title}</h3>
              <p>{post.summary}</p>
              <h5 className='bg-[#6f94] hover:bg-[#6f95] p-3 text-center mt-2 cursor-pointer'>{post.slug}</h5>
            </div> 
            <BlogCard key={post.slug} 
            image = <Image src={urlFor(post.image).url()} alt={post.title} width={40} height={40}/>
            title = {post.title}
            summary = {post.summary}
            slug = {post.slug}
            /> 
            <div className='bg-red-500'>
              <Image src={urlFor(post.image).url()} alt={post.title} width={40} height={40}/>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <h5>{post.slug}</h5>
            </div>  */}





        {/* <p className='mt-4'><strong>Next.js:</strong> Dive into modern React-based web development with powerful
//           features like server-side rendering.</p>
//         <p className='mt-6'><strong>TypeScript:</strong> Learn how this statically typed language enhances
//           JavaScript for building scalable, reliable applications.</p>
//         <p className='mt-6'><strong>Tailwind CSS:</strong> Explore the utility-first CSS framework that
//           streamlines the process of designing responsive and clean UIs.</p>
//         <p className='mt-6'><strong>ShadCN:</strong> Discover how this tool can optimize design and development
//           workflows, especially in React apps.</p>
//         <p className='mt-6'><strong>Sanity:</strong> Understand how this headless CMS allows for dynamic,
//           customizable content management.</p> */}
      </div>
    </div>
  )
}

export default Home






// import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image'
// import React from 'react'

// interface Post {
//   image: any; // Sanity image object
//   title: string;
//   summary: string;
//   slug: string;
// }

// const Home = async () => {
//   // Query to fetch posts
//   const query = `*[_type == "post"]{
//     image,
//     title,
//     summary,
//     "slug": slug.current
//   }`

//   const posts: Post[] = await client.fetch(query);

//   // Prepare the data, including converting the image to a URL string
//   const postsData = posts.map((post) => ({
//     imageUrl: urlFor(post.image).url(),  // Ensures only the URL string is passed
//     title: post.title,
//     summary: post.summary,
//     slug: post.slug
//   }));

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-[10%_auto] p-5 md:h-screen items-center border-[2px] border-[#6EEB83] shadow-[#6EEB83] shadow-inner rounded-sm ">
//       <div className="md:mx-auto flex justify-around mt-10 border-[1px] border-[#6EEB83] py-3 px-1 rounded-sm md:border-none md:block order-2 md:order-1">
//         <span className="text-black text-2xl bg-[#6EEB83] py-3 px-5 md:px-4 rounded-full md:ml-2">
//           <strong><abbr title="Malia Raees">M</abbr></strong>
//         </span>
//         <div className="md:mt-16 ml-4">
//           <Image src="/search.svg" alt="search" width={40} height={40} />
//           <span>search</span>
//         </div>
//         <div className="mt-4 md:mt-8 ml-1">
//           <Image src="/trending_up.png" alt="trending" width={40} height={40} className="ml-2" />
//           <span>trending</span>
//         </div>
//         <div className="md:mt-8">
//           <Image src="/comment.svg" alt="comment" width={40} height={40} className="mx-auto" />
//           <span>comments</span>
//         </div>
//         <div className="md:mt-8 ml-4">
//           <Image src="/create.png" alt="create" width={40} height={40} />
//           <span className="">create</span>
//         </div>
//       </div>
//       <div className="bg-[#6EEB83] absolute translate-x-32 w-0.5 h-[95%] hidden md:block"></div>
//       <div className="mx-10 order-1 md:order-2">
//         <h1 className="text-center text-2xl text-[#6EEB83]"><strong><u>Welcome To My Blog</u></strong></h1>
//         <p className="mt-8 md:mt-14">
//           In this space, I&apos;ll be discussing a variety of IT-related topics, where we can
//           interact with individuals and groups alike. The blog will focus on sharing
//           knowledge-based content, including the latest updates in technology. My goal is to
//           keep us connected in the ever-evolving tech world and create a community
//           where we can learn from each other.
//         </p>
//         <h3 className="text-lg mt-10 text-[#6EEB83]"><u>Posts Highlights..!</u></h3>
//         {
//           postsData.map((post) => (
//             <section key={post.slug} className="grid grid-cols-1 md:grid-cols-3">
//               <div className="">
//                 {/* Make sure to pass only the URL as a string */}
//                 <Image src={post.imageUrl} alt={post.title} width={400} height={200} />
//                 <h3>{post.title}</h3>
//                 <p>{post.summary}</p>
//                 <h5>{post.slug}</h5>
//               </div>
//             </section>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// export default Home;
