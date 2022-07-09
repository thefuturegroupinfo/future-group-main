import React from 'react';
import PropertyCard from './PropertyCard';

function Property() {
  return (
    <>
      <div className=' py-16  flex items-center flex-col'>
        <h2 className='text-4xl text-center font-roboto text-primary font-bold'>
          Kind of Properties
        </h2>
        <p className='py-2 '>
          The future group offers wide range of properties
        </p>
      </div>
      <div className=' flex justify-center '>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </>
  );
}

export default Property;
