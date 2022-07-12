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
      <div className=' flex flex-col md:flex-row  justify-center gap-5 items-center '>
        <PropertyCard
          image='/static/images/two.jpg'
          title='Multi-family'
          text='Housing accommodations that are designed principally for residential use, and consist of not less than 5 rental units on 1 site.'
        />
        <PropertyCard
          image='/static/images/one.jpg'
          title='Senior Living'
          text='A retirement community is a residential neighborhood or a housing development intended for senior citizens.'
        />
        <PropertyCard
          image='/static/images/three.png'
          title='Commercial'
          text='It refers to properties utilized only for commercial or revenue-generating activities.'
        />
      </div>
    </>
  );
}

export default Property;
