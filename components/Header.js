import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Icons/Logo';

function Header() {
  const [menu, setMenu] = useState();
  return (
    <>
      <div className='flex h-20 justify-between items-center md:mx-10 mx-5'>
        <div className='relative md:h-20 md:w-52 h-16 w-44 cursor-pointer'>
          <Link href='/'>
            <div className='flex items-center  space-x-4 sm:mt-2'>
              <div>
                <Logo />
              </div>
              <div className='font-mont font-bold text-gray-800  '>
                <div>
                  The <span className='text-primary'> Future </span>
                </div>
                <div>Group</div>
              </div>
            </div>
          </Link>
        </div>
        <div className=' space-x-6 text-primary font-semibold hidden md:flex'>
          <div>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </div>
          <div>
            <Link href='/aboutus'>
              <a>About us</a>
            </Link>
          </div>
          <div>
            <Link href='/faq'>
              <a>FAQs</a>
            </Link>
          </div>
          <div>
            <Link href='/resources'>
              <a>Resources</a>
            </Link>
          </div>

          <div>
            <Link href='/ebook'>
              <a>E-Book</a>
            </Link>
          </div>
        </div>
        <div
          className='md:hidden  cursor-pointer text-primary space-y-1'
          onClick={() => setMenu(!menu)}
        >
          <svg
            width='25'
            height='2'
            viewBox='0 0 25 2'
            fill='#AD791C'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='1'
              y1='1'
              x2='24'
              y2='1'
              stroke='#AD791C'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
          <svg
            width='25'
            height='2'
            viewBox='0 0 25 2'
            fill='#AD791C'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='1'
              y1='1'
              x2='24'
              y2='1'
              stroke='#AD791C'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
          <svg
            width='25'
            height='2'
            viewBox='0 0 25 2'
            fill='#AD791C'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='1'
              y1='1'
              x2='24'
              y2='1'
              stroke='#AD791C'
              strokeWidth='2'
              strokeLinecap='round'
            />
          </svg>
        </div>
      </div>
      {menu && (
        <div className=' text-primary  absolute top-20 bg-white w-full space-y-5 px-10 py-5 z-20'>
          <div onClick={() => setMenu(false)}>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </div>
          <div onClick={() => setMenu(false)}>
            <Link href='/aboutus'>
              <a>About us</a>
            </Link>
          </div>
          <div onClick={() => setMenu(false)}>
            <Link href='/faq'>
              <a>FAQs</a>
            </Link>
          </div>
          <div onClick={() => setMenu(false)}>
            <Link href='/resources'>
              <a>Resources</a>
            </Link>
          </div>
          <div onClick={() => setMenu(false)}>
            <Link href='/ebook'>
              <a>E-Book</a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
