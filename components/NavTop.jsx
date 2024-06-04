'use client';
import React from 'react';
import Link from 'next/link';

export default function NavLeft() {
  return (
    <div className='nav-left hidden lg:flex flex-col items-center justify-start fixed top-0 left-0 h-screen'>
      <Link
        href='https://www.linkedin.com/in/your-profile'
        className='nav-left-item my-6 text-lg bg-body-bg font-grandstander text-body-text'>
        LI
      </Link>
      <Link
        href='https://twitter.com/your-profile'
        className='nav-left-item my-6 text-lg bg-body-bg font-grandstander text-body-text'>
        TW
      </Link>
      <Link
        href='https://dribbble.com/your-profile'
        className='nav-left-item my-6 text-lg bg-body-bg font-grandstander body-bg text-body-text'>
        DR
      </Link>
      <div className='w-px h-24 bg-gray-600 my-8'></div>
      <div className='copyright text-xs text-body-text'>
        © 2023
      </div>
    </div>
  );
}
