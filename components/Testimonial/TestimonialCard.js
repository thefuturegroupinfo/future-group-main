import Image from 'next/image';
import React from 'react';

function TestimonialCard({ title, text, image }) {
  return (
    <div className='w-72  px-2 text-center flex flex-col justify-end relative '>
      {/* card */}
      <div className=' relative w-28 h-28 flex justify-center  left-1/2 -translate-x-1/2 top-14 '>
        <div>
          <Image
            src={'https://picsum.photos/200'}
            alt='profile'
            layout='fill'
            className='rounded-full object-cover object-right w-28 h-28 '
          />
        </div>
      </div>
      <div>
        <div className='flex items-end justify-center list-shadow rounded-2xl h-[302px]'>
          <div className='pb-10'>
            <div className='text-primary font-bold text-1xl  pb-6'>{title}</div>
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