import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center p-4 max-w-6xl m-auto'>
            <Link to='/'>
                <h1 className='font-bold text-xl'>Auth App</h1>
            </Link>
        <ul className='flex gap-6 font-medium'>
            <Link to='/'>
            <li>Home</li>
            </Link>
            <Link to='/about'>
            <li>About</li>
            </Link>
            <Link to='/sign-in'>
            <li>Sign In</li>
            
            </Link>
        </ul>
        </div>
      
    </div>
  )
}

export default Header
