import React from 'react';

function FeatureCard({ title, text }) {
  return (
    <div className='w-[550px]'>
      <div className='text-gray-700 font-roboto font-bold text-2xl py-4 '>
        {title}
      </div>
      <div>{text}</div>
    </div>
  );
}

export default FeatureCard;
