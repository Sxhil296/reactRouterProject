import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <main className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold mb-4'>Home Page</h1>
      <p className='mb-4'>this is the home page of <strong>react-router-dom</strong> practice project, to know more about <strong>react-router-dom</strong>, click on the following button</p>
      <button>
        <Link to='https://reactrouter.com/en/main' target="_blank" rel="noopener noreferrer" className='bg-green-600 px-6 py-3 rounded text-white font-medium '>Know More</Link>
      </button>

    </main>
    </>
  )
}

export default Home