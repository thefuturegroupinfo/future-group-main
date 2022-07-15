import Image from 'next/image';
import React from 'react';

function TestimonialCard({ title, text, image, p }) {
  return (
    <div className='w-72  px-2 text-center flex flex-col justify-end relative '>
      {/* card */}
      <div className=' relative w-28 h-28 flex justify-center  left-1/2 -translate-x-1/2 top-14 '>
        <div className='relative w-28 h-28'>
          <Image
            src={image}
            alt='profile'
            layout='fill'
            className='rounded-full object-cover  w-28 h-28 '
          />
        </div>
      </div>
      <div>
        <div className='flex items-end justify-center list-shadow rounded-2xl h-[272px]'>
          <div className='pb-10'>
            <div className='text-primary font-bold text-1xl '>{title}</div>
            <div className='text- pb-5 text-gray-600 font-bold'>{p}</div>
            <div className='h-24 overflow-hidden w-[198px]'>
              <p className='font-light p-primary w-48 text-sm '>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
