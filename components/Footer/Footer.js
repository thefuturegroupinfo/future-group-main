import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <>
      <div className='max-w-7xl mx-auto relative  overflow-hidden flex  justify-between items-center h-full w-full'>
        <div className='w-full'>as</div>
        <div className='w-1/3 space-y-3 text-white'>
          <div className='capitalize text-3xl text-roboto font-bold'>
            Don’t miss a thing!
          </div>
          <p>
            Subscribe with Email and loads of interesting news will be sent to
            you.
          </p>

          <div className='flex items-center h-full  '>
            <input
              type='text'
              className='py-2 rounded-l-lg px-5'
              placeholder='Your Email Here '
            />
            <button className='py-2 bg-black text-white px-5 rounded-r-lg '>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto flex justify-between py-10'>
        <div>
          <Image
            src='/static/images/logo.png'
            alt='logo'
            height='62px'
            width='180px'
          />
          <div className='w-72 pt-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
            blanditiis quo esse vel quia, illo, dolorem quas neque fuga
            laboriosam voluptatibus quos minima a. Dolor, rem autem voluptatum
            voluptatem non eligendi doloremque aperiam suscipit sed cupiditate
          </div>
        </div>
        <div className='py-4 space-y-5 text-gray-800'>
          <div className='font-bold '>Useful Links</div>
          <div>
            <Link href='/'>
              <a>Home</a>
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
          <div>
            <Link href='/privacy-policy'>
              <a>Privacy Policy</a>
            </Link>
          </div>
          <div>
            <Link href='/disclaimer'>
              <a>Affiliate Disclaimer</a>
            </Link>
          </div>
        </div>
        <div className='py-4 space-y-5 text-gray-800'>
          <div className='font-bold '>Contact Info</div>
          <div>
            16135 Preston Rd Suite #106 <br /> Dallas, TX 75248
          </div>
          <div>
            <span className='font-bold'>Phone:</span> 000-000-0000
          </div>
          <div>
            <span className='font-bold'> Email:</span> thefuturegpinfo@gmail.com
          </div>
          <div>
            <span className='font-bold'> Website:</span> thefuturegp.com
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
