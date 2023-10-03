import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const PostBody = () => {
  const {postId} = useParams()
  const[post, setPost] = useState(null)

  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then((data) => {
      setPost(data)
    })
    .catch((error) => console.error("Error fetching data:", error));
  },[postId])
  return (
    <>
    <main className="container max-w-6xl mt-6 mx-auto">
      <h3 className='text-xl font-bold'>Post : {postId}</h3>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <button className='mt-20 bg-orange-600 px-4 py-2 rounded-md text-white'>
        <Link to="/posts">Back to all posts</Link>
      </button>
    </main>
    </>
  )
}

export default PostBody