import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../Icons/Logo';

function Footer() {
  return (
    <>
      <div className='max-w-7xl mx-auto relative  overflow-hidden flex flex-col md:flex-row  justify-between items-center h-full w-full '>
        <div className='w-full hidden md:block relative z-50  '>
          <Image
            src='/static/images/book.png'
            alt='fillasa'
            height='420px'
            width='420px'
            className='relative z-20'
          />
        </div>
        <div className='md:w-1/2 space-y-3 text-white  flex flex-col h-full items-center '>
          <div className='flex flex-col  justify-center h-full  space-y-5 mx-10'>
            <div className='capitalize text-3xl text-roboto font-bold '>
              Don’t miss a thing!
            </div>
            <p>
              Subscribe with Email and loads of interesting news will be sent to
              you along with this Ebook
            </p>

            <div className='flex items-center h-10  md:mx-0 self-start  '>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSe67TpJXN7l2jFszUBzgpcQRg9DCU5Sn2gvJcW4QYJ48tFUjw/viewform'
                target='_blank'
                rel='noreferrer'
              >
                <button
                  type='submit'
                  className='py-2 bg-black text-white px-5 rounded-lg  '
                >
                  Subscribe
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between py-10 px-5'>
        <div>
          <div className='flex items-center  space-x-4 sm:mt-2'>
            <div>
              <Logo />
            </div>
            <div className='font-mont font-bold text-gray-800  '>
              <div>
                The <span className='text-primary'> Future </span>
              </div>
              <div>Group</div>
            </div>
          </div>
          <div className='md:w-[400px] w-full pt-5 text-justify text-gray-800'>
            The Future Group is founded with the vision of investing in real
            estate to accommodate the future! Targeting upcoming designs and
            areas to support future needs and do value addition to boost the
            revenue and increase profit.
          </div>
        </div>
        <div className='py-4 space-y-5 text-gray-800 md:w-64'>
          <div className='font-bold '>Useful Links</div>
          <div>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </div>
          <div>
            <Link href='/faq'>
              <a>FAQs</a>
            </Link>
          </div>
          <div>
            <Link href='/resources'>
              <a>Resources</a>
            </Link>
          </div>
          <div>
            <Link href='/privacy-policy'>
              <a>Privacy Policy</a>
            </Link>
          </div>
          <div>
            <Link href='/disclaimer'>
              <a>Affiliate Disclaimer</a>
            </Link>
          </div>
        </div>
        <div className='py-4 space-y-5 text-gray-800 md:w-64'>
          <div className='font-bold '>Contact Info</div>
          <div>
            16135 Preston Rd Suite #106 <br /> Dallas, TX 75248
          </div>
          <div>
            <span className='font-bold'>Phone:</span>
            <a href='tel:214-300-9874'></a> 214-300-9874
          </div>
          <div>
            <span className='font-bold'> Email: </span>
            <a href='mailto:thefuturegpinfo@gmail.com'>
              thefuturegpinfo@gmail.com
            </a>
          </div>
          <div>
            <span className='font-bold'> Website:</span> thefuturegp.com
          </div>
        </div>
      </div>
      <div className='uppercase bg-[#AD791C] text-sm text-center text-white'>
        Website designed and developed by Tridhee Technology Pvt Ltd
      </div>
    </>
  );
}

export default Footer;
