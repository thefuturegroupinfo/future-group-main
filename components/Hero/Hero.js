import Link from 'next/link';
import React from 'react';

function Hero() {
  return (
    <div className='lg:h-screen md:h-[700px] h-[500px] relative'>
      <div className='max-w-2xl text-white absolute md:bottom-1/3 bottom-10  md:mx-20 mx-5 space-y-4'>
        <p> We are offering the</p>
        <h1 className='md:text-5xl text-3xl font-semibold font-roboto capitalize'>
          Best real estate deals
        </h1>
        <p className='md:text-base text-sm'>
          Through our diversified investment strategies consisting Multi Family,
          Senior Living and commercial real estate investment and syndication,
          we assist both seasoned and prospective investors in becoming
          financially independent.
        </p>
        <p className='pt-2 md:text-base text-sm'>
          {`While you enjoy living the life you've always wanted, we'll take care
          of the job.`}
        </p>
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSe67TpJXN7l2jFszUBzgpcQRg9DCU5Sn2gvJcW4QYJ48tFUjw/viewform'
          target='_blank'
          rel='noreferrer'
          className='bg-[#AD791C] py-2 px-2 rounded-md shadow-xl mt-5 inline-block '
        >
          More Details
        </a>
      </div>
    </div>
  );
}

export default Hero;
