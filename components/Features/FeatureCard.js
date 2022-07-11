import React from 'react';

function FeatureCard({ title, text }) {
  return (
    <div className='md:w-[550px] px-9 md:px-0 text-gray-800 '>
      <div className='text-gray-700 font-roboto font-bold text-2xl py-4 '>
        {title}
      </div>
      <div>{text}</div>
    </div>
  );
}

export default FeatureCard;
