import Image from 'next/image';
import React from 'react';
import Icons from '../components/Icons/Icons';

function index() {
  return (
    <div>
      <div className='pt-10'>
        <div className='text-primary text-3xl  md:text-5xl font-bold text-center font-roboto'>
          About Us
        </div>
        <div className='max-w-7xl md:mx-auto text-center py-14 text-gray-900 mx-5 '>
          {` We don't only invest in real estate. We make investments in the
          communities we engage in. We are confident in our capacity to provide
          you with excellent service because of our fundamental principles, high
          standards, and well-respected competence. In an environment of rapid
          change, we offer stability & consistency.`}
        </div>
        <div className='text-primary text-3xl  md:text-5xl font-bold text-center font-roboto'>
          Meet our CEO
        </div>
        <div className='flex  flex-col-reverse md:flex-row max-w-7xl mx-auto text-center py-14 justify-between items-center'>
          <div className='md:w-1/2 px-5 py-5 md:py-0 md:text-left text-center'>
            Vijay Patel is a serial entrepreneur with a remarkable track record
            in the real estate, healthcare, jewelry, and diamond industries. He
            has a strong reputation in the DFW metroplex business community for
            his high standards and ethical behavior in business. Additionally,
            he belongs to several significant associations, such as the Denton
            County Chamber of Commerce and the Indo-American Chamber of
            Commerce. He has served as a board member for Methodist Hospital
            Group under his leadership, Methodist Hospital Group has become one
            of the best hospitals in Texas, and is also an executive member of
            the American Executive Council for Entrepreneurs. He founded “The
            future Group” with a vision to create a long-lasting legacy and
            create passive income for the investors. He concentrates on new
            designs and potential markets. To improve income and profit, he
            concentrates on emerging designs and areas that will support future
            demands. For each of his undertakings, he has consistently delivered
            a 1.5–2x return on investment to his clients.
          </div>
          <div className='w-1/2 flex  flex-col items-center justify-center py-4'>
            <div className='bg-gray-100 w-64 h-64 rounded-full relative overflow-hidden'>
              <Image
                src='/static/images/ceo.png'
                alt='ceo'
                layout='fill'
                className='object-cover object-center'
              />
            </div>
            <div className='py-5 text-2xl font-bold text-gray-900 font-roboto'>
              Vijaybhai Patel
            </div>
            <div>
              <div className='flex space-x-6 '>
                <div>
                  <Icons icon='twitter' />
                </div>
                <div>
                  <Icons icon='insta' />
                </div>
                <div>
                  <Icons icon='telegram' />
                </div>
                <div>
                  <Icons icon='facebook' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
