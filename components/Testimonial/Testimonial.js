import React from 'react';
import TestimonialCard from './TestimonialCard';

function Testimonial() {
  return (
    <div>
      <div className='section-title text-center py-5 font-roboto'>
        Our clients speak
      </div>
      <div className='text-center'>
        We have been working with clients around the Globe
      </div>
      <div className='flex justify-center flex-col md:flex-row items-center'>
        <TestimonialCard
          title='Incredible Experience'
          text='Working with this group is always a pleasure, such a great resource for us. '
        />
        <TestimonialCard
          title='Professional Partner'
          text='Vijay is very Professional in his work. '
        />
        <TestimonialCard
          title='Dependable & Responsive'
          text='We were astonished by his guidance, responsiveness, and competence throughout our investment process. With our investment, Vijay has our complete faith.'
        />
      </div>
    </div>
  );
}

export default Testimonial;
