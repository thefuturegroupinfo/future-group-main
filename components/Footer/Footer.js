import React from 'react';

function Footer() {
  return (
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
  );
}

export default Footer;
