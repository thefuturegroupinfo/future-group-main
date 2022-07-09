import Image from 'next/image';
import React from 'react';

function PropertyCard({ image, title, text }) {
  return (
    <div className='w-[400px] h-[500px]   '>
      <div className='relative h-full rounded-md overflow-hidden '>
        <Image
          src={image}
          layout='fill'
          alt='family'
          className='bg-opacity-10 brightness-50'
        />
        <div className='absolute w-full  z-10 text-white'>
          <div className='flex justify-center pt-14 text-3xl font-roboto text-white'>
            {title}
          </div>
          <div className='mx-10 py-5 text-center'>{text}</div>
        </div>
        <button></button>
      </div>
    </div>
  );
}

export default PropertyCard;
