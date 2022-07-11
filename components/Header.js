import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className='flex h-16 justify-between items-center'>
      <div>
        {/* <Image src='/static/images/logo.png' height='70px' width='200px' /> */}
      </div>
      <div className='flex space-x-6 text-primary font-semibold'>
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
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
