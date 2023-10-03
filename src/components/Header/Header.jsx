import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className='sticky z-50 top-0'>
      <nav className='bg-gray-200 px-4 lg:px-6 py-3'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl font-bold'>
          <Link to='/'>LOGO</Link>
          <ul className='flex gap-4 font-medium'>
            <li>
              <NavLink to='/' className={({isActive}) => `${isActive ? "text-orange-600" : "text-black"} hover:text-orange-600`}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive}) => `${isActive ? "text-orange-600" : "text-black"} hover:text-orange-600`}>About</NavLink>
            </li>
            <li>
              <NavLink to='/posts' className={({isActive}) => `${isActive ? "text-orange-600" : "text-black"} hover:text-orange-600`}>Posts</NavLink>
            </li>
            <li>
              <NavLink to='/github' className={({isActive}) => `${isActive ? "text-orange-600" : "text-black"} hover:text-orange-600`}>Github</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  )
}

export default Header