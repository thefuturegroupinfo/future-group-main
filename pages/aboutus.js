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
        <div className='max-w-5xl md:mx-auto text-center py-14 text-gray-900 mx-5 '>
          {` We don't only invest in real estate. We make investments in the
          communities we engage in. We are confident in our capacity to provide
          you with excellent service because of our fundamental principles, high
          standards, and well-respected competence. In an environment of rapid
          change, we offer stability & consistency.`}
        </div>
        <div className='text-primary text-3xl  md:text-5xl font-bold text-center font-roboto'>
          Meet our CEO
        </div>
        <div className='flex  flex-col-reverse md:flex-row max-w-5xl mx-auto text-center py-14 justify-between items-center'>
          <div className='md:w-1/2 px-5 py-5 md:py-0'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            deserunt quaerat asperiores adipisci ab quibusdam magnam a
            reprehenderit et dolor non, magni numquam cumque velit dolore omnis
            quos? Eaque cumque excepturi vitae asperiores consectetur et placeat
            quisquam vel omnis impedit quidem, est, dolorum numquam, autem in
            sapiente exercitationem iusto. Doloribus.
          </div>
          <div className='w-1/2 flex  flex-col items-center justify-center py-4'>
            <div className='bg-gray-100 w-64 h-64 rounded-full relative overflow-hidden'>
              <Image
                src='/static/images/ceo.jpg'
                alt='ceo'
                layout='fill'
                className='object-cover object-left-right'
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
