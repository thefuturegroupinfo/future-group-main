import React from 'react';

function Faq({ q, a }) {
  return (
    <div className='space-y-2'>
      <h3 className='font-roboto text-primary'>{q}</h3>
      <h4 className='text-gray-800'>{a}</h4>
    </div>
  );
}

export default Faq;
