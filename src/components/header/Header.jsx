import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className='bg-slate-300'>
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto ">
        <Link to='/'>
          <h1 className='sm:mr-1 font-bold text-sm sm:text-xl flex flex-wrap'>   <span className='text-green-900'> Green </span>
            <span className='text-green-400'> State</span></h1>
        </Link>

        <form className='bg-slate-100 p-4 rounded-lg flex items-center'>
          <input type='search' placeholder='Serach' className='w-24 sm:w-64 focus:outline-none text-xl placeholder-red-600 bg-transparent' /><IoMdSearch />
        </form>
        <ul className='flex gap-3'>
          <li className='hidden sm:inline hover:underline'>Home</li>
          <li className='hidden sm:inline hover:underline'>About</li>
          <li className='hidden sm:inline hover:underline'>Sign-In</li>
        </ul>
      </div>



    </header>
  )
}

export default Header