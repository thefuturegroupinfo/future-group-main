import Image from 'next/image';
import React from 'react';
import FeatureCard from './FeatureCard';

function Feature() {
  return (
    <div className='py-20  '>
      <div className='section-title'>Out Features</div>
      <div className='flex'>
        <div className='w-1/2 flex flex-col justify-center'>
          <FeatureCard
            title='Experienced Assistance'
            text="Our team's method involves finding assets with upside potential that are situated in key areas supporting development with strong growth fundamentals"
          />
          <FeatureCard
            title='Diversification'
            text='It is one way to balance risk and reward in your investment portfolio by diversifying your assets'
          />
          <FeatureCard
            title='Risk Analysis'
            text="Our investment team carefully examines the business plan & strategy to identify all of the project's vulnerabilities."
          />
        </div>
        <div className='w-1/2'>
          <div className=' flex  items-center justify-end'>
            <Image
              src='/static/images/features.jpg'
              height='410px'
              width='410px'
              alt='features'
              className='rounded-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
