import React from 'react'
import {useSelector} from'react-redux'

export default function Profile() {
  const {currentUser} = useSelector(state => state.user)
 
  return (
    <div className='p-3 max-w-lg mx-auto gap-4'>
      <h1 className='text-3xl text-center my-7 font-semibold'>Profile</h1>
      <form action="" className='flex flex-col'>
      <img src={currentUser.profileImage} className='h-24 w-24 self-center ' alt="" />
      <input defaultValue={currentUser.username} type="text" placeholder='Username' id='username' className='p-3 bg-slate-300  mt-3 rounded-lg cursor-pointer' />
      <input defaultValue={currentUser.email} type="email" placeholder='email'id='email' className='bg-slate-300 p-3 mt-3 rounded-lg' />
      <input type="password" placeholder='password' id='password' className='bg-slate-300 p-3 rounded-lg mt-3' />
      <button className='bg-slate-700 text-white uppercase mt-3 p-3 rounded-lg opacity-95 hover:opacity-80'>Update</button>
      <div className='justify-between flex mt-3'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
      </form>
    </div>
  )
}
