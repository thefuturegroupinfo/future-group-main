/* eslint-disable @next/next/no-img-element */
import React from 'react';

function Dail({ b, setB }) {
  return (
    <div
      className='relative z-50'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0'>
          <div
            className={
              'relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 '
            }
          >
            <div className='mx-auto  bg-[#f4f4f4] px-4 pt-5 pb-4 text-white sm:p-6 sm:pb-4'>
              <div
                className='text-black absolute right-10 top-8 cursor-pointer'
                onClick={() => setB(!b)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </div>
              <div className='text-center text-lg pt-12 md:pt-0 md:text-3xl text-black capitalize '>
                Man with a <span className='font-bold'> Mission</span> to get
                you out from the
                <span className='text-primary'> Rat Race!</span>
              </div>
              <div className=' mx-auto bg-[#f4f4f4] px-4 pt-4 pb-4 sm:p-4 sm:pb-4 md:w-auto text-black gap-10 md:flex  '>
                <div className='text-black  relative  h-full flex items-center justify-center  '>
                  <img
                    src='/static/images/banner.jpg'
                    alt='banner'
                    layout='fill'
                    className=' h-[300px] w-[300px] md:h-[400px] md:w-[400px]  inline-block'
                  />
                </div>
                <div className='flex flex-col justify-center items-center   '>
                  <div className='text-left mx-2'>
                    <div className='my-2 font-bold text-sm  md:text-xl text-primary'>
                      What you will learn in this guide
                    </div>
                    <div className='space-y-3 text-sm md:text-base  '>
                      <p className='md:list-item'>
                        What is Passive Real Estate Investment
                      </p>
                      <p className='md:list-item'>
                        Types of Passive Real Estate Investment
                      </p>
                      <p className='md:list-item'>
                        Passive Income Investor Mistakes to avoid
                      </p>
                      <p className='md:list-item'>
                        Different source to create Passive income in Real Estate
                      </p>
                      <p className='md:list-item'>
                        What is A multifamily Property?
                      </p>
                      <p className='md:list-item'>
                        Tips for investing in multifamily Real Estate
                      </p>
                      <p className='md:list-item'>
                        How to Retire Rich through Real Estate Investment
                      </p>
                    </div>
                  </div>
                  <a
                    href='https://docs.google.com/forms/d/e/1FAIpQLSe67TpJXN7l2jFszUBzgpcQRg9DCU5Sn2gvJcW4QYJ48tFUjw/viewform'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='bg-[#AD791C] text-white p-3 my-5 font-bold'>
                      Get Free Guide Now!
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dail;
