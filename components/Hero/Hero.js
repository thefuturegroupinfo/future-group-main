import React from 'react';

function Hero() {
  return (
    <div className='lg:h-screen h-[700px] relative'>
      <div className=' max-w-2xl text-white absolute bottom-1/3 mx-20 space-y-4'>
        <p>We are offering the</p>
        <h1 className='text-5xl font-semibold font-roboto'>
          Best real estate deals
        </h1>
        <p>
          Through our diversified investmnet strategies consisting Multi Family,
          Senior Living and commercial real estate investment and syndication,
          we assist both seasoned and prospective investors in becoming
          financially independent.
        </p>
        <p className='pt-2'>
          While you enjoy living the life you've always wanted, we'll take care
          of the job.
        </p>
        <button className='bg-[#AD791C] py-2 px-2 rounded-md shadow-xl mt-5'>
          More Details
        </button>
      </div>
    </div>
  );
}

export default Hero;
