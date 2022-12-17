import React from 'react'
import PropTypes from 'prop-types'
// import { NavLink } from 'react-router-dom'
export default function Navbar({ changeMode, title}) {
  
  return (
    <nav className="bg-white shadow-lg mb-2 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto px-2">
    <a href='#' className="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{title}</span>
    </a>
    <a href='#' className='mx-3 mr-auto pl-3 dark:text-white'>Home</a>
    {/* <a href='/' className='mr-auto dark:text-white'>About</a> */}
    <button onClick={(e)=>{
            changeMode(e)
          }} className='p-2 border border-2 text-[14px] rounded-lg outline-none focus:outline-none dark:text-white dark:bg-["red"] dark:border-gray-700'>Dark Mode</button>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
text: PropTypes.string
}
Navbar.defaultProps = {
  title : "hello",
  text : "about"
}
