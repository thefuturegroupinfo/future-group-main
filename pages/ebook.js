import Image from 'next/image';
import React from 'react';

function Ebook() {
  return (
    <>
      <div className='relative md:h-[800px] md:w-[800px]  h-[300px] w-[300px]  mx-auto  '>
        <Image
          src='/static/images/banner.jpg'
          alt='banner'
          layout='fill'
          className='px-10'
        />
      </div>
      <div className='w-1/2 flex  justify-center w-full'>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSe67TpJXN7l2jFszUBzgpcQRg9DCU5Sn2gvJcW4QYJ48tFUjw/viewform'
          target='_blank '
          rel='noreferrer'
        >
          <div className='bg-[#AD791C] text-white p-3 my-5 font-bold text-center'>
            Get Free Guide Now!
          </div>
        </a>
      </div>
    </>
  );
}

export default Ebook;
