import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const { currentUser } = useSelector((state) => state.user);
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
          {currentUser ? (
            <Link to='/profile'>
              <img
                src={currentUser.profileImage || '/default-image.png'}
                alt='profile'
                className='h-9 w-9  rounded-full object-cover'
              />
      

            </Link>
          ) : (
            <Link to='/signin'>
              <li>Sign In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
