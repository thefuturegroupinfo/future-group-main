import Image from 'next/image';
import React from 'react';

function ResourceCard({ link, title, image, description }) {
  return (
    <div className='py-7'>
      <a href={link} className='flex flex-col '>
        <h5 className='text-gray-800  px-5  font-bold text-sm md:text-base pb-4 '>
          {title}
        </h5>
        <div className='flex  flex-col md:flex-row items-center px-5'>
          <div className='w-[200px] h-[300px] relative'>
            <Image
              src={image}
              layout='fill'
              alt={title}
              className='flex justify-center '
            />
          </div>
          <div className='w-full flex items-center px-10 text-justify pt-5 md:pt-0 text-sm md:text-base'>
            {description}
          </div>
        </div>
      </a>
    </div>
  );
}

export default ResourceCard;
