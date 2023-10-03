import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    // fetch('https://jsonplaceholder.typicode.com/posts')  //all 100 posts
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=20") // Add _limit=20 query parameter for only 20 posts
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      setPosts(data)
    })
  }, [])
  return (
    <>
    <main className="container max-w-7xl flex flex-col gap-4 mx-auto mt-4">
      <h1 className='text-3xl text-orange-600 font-bold'>Posts</h1>
      <ul className="list-decimal">
        {posts.map((post)=> (
          <li key={post.id} className='text-xl font-bold '>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
    </>
  )
}

export default Posts