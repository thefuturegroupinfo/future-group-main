import Image from 'next/image';
import React from 'react';
import FeatureCard from './FeatureCard';

function Feature() {
  return (
    <div className='py-20  text-center md:text-left '>
      <div className='section-title py-5 md:py-0'>Out Features</div>
      <div className='flex flex-col-reverse md:flex-row '>
        <div className='md:w-1/2 w-full flex flex-col justify-center '>
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
        <div className='md:w-1/2'>
          <div className=' flex  items-center md:justify-end w-full justify-center'>
            <div className='relative w-64 h-64 md:w-96 md:h-96 flex  justify-center items-center'>
              <Image
                src='/static/images/features.jpg'
                layout='fill'
                alt='features'
                className='rounded-full object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
