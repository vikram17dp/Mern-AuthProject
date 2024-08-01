import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center my-7 font-semibold'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
          <input className='bg-slate-300 rounded-lg px-4 py-3 outline-none' type="text" placeholder='Username' id='username'/>
          <input className='bg-slate-300 rounded-lg px-4 py-3 outline-none' type="email" placeholder='Email' id='email'/>
          <input className='bg-slate-300 rounded-lg px-4 py-3 outline-none' type="password" placeholder='Password' id='password'/>
          <button className='bg-slate-700 text-white uppercase p-4 rounded-md hover:opacity-85 disabled:opacity-100'>Sign Up</button>
          <button className='bg-red-700 text-white uppercase p-4 rounded-md hover:opacity-85 disabled:opacity-100'>continue with Google</button>
      </form>
      <div className='gap-5 text-[18px] flex mt-3'>
          <p className='text-black tracking-tighter'>Have an account</p>
          <Link to='/sign-in'>
          <span className='text-blue-700 cursor-pointer'>Sign-in</span>
          
          </Link>
      </div>
    </div>
  )
}
