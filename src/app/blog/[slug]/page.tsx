'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'
import { components } from '@/app/components/customComponents'
import { client } from '@/sanity/lib/client'

interface Post {
  title: string
  image: any
  summary: string
  content: any
  author: string
  date: string
}

interface Comment {
  id: number
  text: string
}

const Blog = ({ params: { slug } }: { params: { slug: string } }) => {
  const [post, setPost] = useState<Post | null>(null)
  const [comment, setComment] = useState<string>('')
  const [comments, setComments] = useState<Comment[]>([])
  const [showCommentSection, setShowCommentSection] = useState<boolean>(false)

  useEffect(() => {
    const fetchPost = async () => {
      const query = `*[_type == "post" && slug.current == "${slug}"]{
        title, image, summary, author, date, content
      }[0]`

      const postData = await client.fetch(query)
      setPost(postData)
    }

    fetchPost()
  }, [slug])

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([
        ...comments,
        { id: comments.length + 1, text: comment.trim() },
      ])
      setComment('') // Clear the comment input after submission
    }
  }

  // Toggle comment section visibility
  const toggleCommentSection = () => {
    setShowCommentSection(!showCommentSection)
  }

  if (!post) {
    return <div className='my-[40%]'>Loading...</div> // Loading state while fetching post data
  }

  return (
    <div className='bg-whitesmoke px-5 py-8 max-w-[1500px] mx-auto mt-[60px]'>
      <h1 className='text-2xl font-serif text-center pb-8'>
        <u>{post.title}</u>
      </h1>

      <div className='md:flex justify-around gap-3 text-center md:text-left items-center mb-8 '>
        <Image
          src={urlFor(post.image).url()}
          alt={post.title}
          width={350}
          height={300}
          className='mx-auto'
        />
        <div>
          <p className='mt-8 md:mt-0'>
            Author: <strong>{post.author}</strong>
          </p>
          <p className='my-8'>Release date: {post.date}</p>
          <p>&quot;{post.summary}&quot;</p>
        </div>
      </div>

      <PortableText value={post.content} components={components} />

      <button
        onClick={toggleCommentSection}
        className='fixed bottom-5 right-5 bg-secondary hover:bg-primary px-3 py-2 rounded-es-full'
      >
        {showCommentSection}
        Comments
      </button>

      {/* Show Comment Section if toggled */}
      {showCommentSection && (
        <div className='mt-8'>
          <h3 className='text-xl mb-4'>Comments</h3>

          {/* Comment Input */}
          <div className='mb-4'>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder='Write your comment...'
              className='w-full p-2 border rounded-lg'
            ></textarea>
            <button
              onClick={handleCommentSubmit}
              className='mt-2 bg-secondary hover:bg-primary text-white p-2 rounded-lg'
            >
              Submit Comment
            </button>
          </div>

          {/* List of Comments */}
          <div>
            {comments.length === 0 && <p>No comments yet...</p>}
            {comments.map((comment) => (
              <div key={comment.id} className='mb-4'>
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog
