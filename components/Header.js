import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <div className='flex h-16 justify-between items-center'>
      <div>
        {/* <Image src='/static/images/logo.png' height='70px' width='200px' /> */}
      </div>
      <div className='flex space-x-6 text-primary font-semibold'>
        <div>Home</div>
        <div>About us</div>
        <div>FAQs</div>
        <div>Blog</div>
      </div>
    </div>
  );
}

export default Header;
