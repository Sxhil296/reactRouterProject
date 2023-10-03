import React, { useEffect, useState } from 'react'

const Github = () => {<h2>GitHub Details</h2>
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch('https://api.github.com/users/sxhil296')
    .then(response => response.json())
    .then((data) => {
      setData(data)
    })
  },[])
  return (
    <>
    {data ? (
      <>
      <main className="container flex mx-auto max-w-7xl justify-center mt-10">
      
      <div className='flex-1'>
        <img src={data.avatar_url} alt="github pfp" width={350} className='rounded-lg' />
      </div>
      <div className='flex-1'>
        <h3>{data.login}</h3>
        <p>{data.bio}</p>
      <div className="flex gap-3 mt-16">
        <div className='flex flex-col'>
          <span>Public Repos</span>
          <span>{data.public_repos}</span>
        </div>
        <div className='flex flex-col'>
          <span>Followers</span>
          <span>{data.followers}</span>
        </div>
        <div className='flex flex-col'>
          <span>Following</span>
          <span>{data.following}</span>
        </div>
      </div>
      </div>
    </main>
      </>
    ) : (
      <p>Loading...</p>
    )
    }
    </>
  )
}

export default Github