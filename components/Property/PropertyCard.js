import Image from 'next/image';
import React from 'react';

function PropertyCard({ image, title, text }) {
  return (
    <div className='md:w-[400px] h-[550px]  w-[350px]   relative'>
      <div className='relative h-full rounded-md overflow-hidden  flex '>
        <Image
          src={image}
          layout='fill'
          alt='family'
          className='bg-opacity-10 brightness-50 object-center object-cover'
        />
        <div className='absolute w-full  z-10 text-white flex flex-col justify-start h-full '>
          <div className='h-full'>
            <div className='flex justify-center pt-14 text-3xl font-roboto text-white'>
              {title}
            </div>
            <div className='mx-10 py-5 text-center'>{text}</div>
          </div>
          <div className='z-10     rounded-full text-white self-center justify-end  mb-10'>
            <button className='flex  items-center justify-center bg-[#AD791C] h-14 w-14 rounded-full cursor-pointer us'>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSe67TpJXN7l2jFszUBzgpcQRg9DCU5Sn2gvJcW4QYJ48tFUjw/viewform'
                target='_blank'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  />
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
