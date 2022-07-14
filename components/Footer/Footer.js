import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../Icons/Logo';

function Footer() {
  return (
    <>
      <div className='max-w-7xl mx-auto relative  overflow-hidden flex flex-col md:flex-row  justify-between items-center h-full w-full '>
        <div className='w-full hidden md:block'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='435'
            height='320'
            fill='none'
            viewBox='0 0 435 320'
          >
            <g filter='url(#a)'>
              <path
                fill='#AD791C'
                d='m183.221 5 236.334 178.22-178.22 236.334L5.001 241.334z'
              />
            </g>
            <defs>
              <filter
                id='a'
                width='434.554'
                height='434.554'
                x='0'
                y='0'
                colorInterpolationFilters='sRGB'
                filterUnits='userSpaceOnUse'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  result='hardAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dx='5' dy='5' />
                <feGaussianBlur stdDeviation='5' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix values='0 0 0 0 0.0862745 0 0 0 0 0.105882 0 0 0 0 0.113725 0 0 0 0.23 0' />
                <feBlend
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_116_197'
                />
                <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow_116_197'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='388'
            height='274'
            fill='none'
            viewBox='0 0 388 274'
          >
            <g filter='url(#a)'>
              <path
                fill='#AD791C'
                d='m87.915-109 284.15 82.914-82.914 284.15L5.001 175.15z'
              />
            </g>
            <defs>
              <filter
                id='a'
                width='387.065'
                height='387.065'
                x='0'
                y='-114'
                colorInterpolationFilters='sRGB'
                filterUnits='userSpaceOnUse'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  result='hardAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dx='5' dy='5' />
                <feGaussianBlur stdDeviation='5' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix values='0 0 0 0 0.0862745 0 0 0 0 0.105882 0 0 0 0 0.113725 0 0 0 0.23 0' />
                <feBlend
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_116_198'
                />
                <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow_116_198'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='435'
            height='320'
            fill='none'
            viewBox='0 0 435 320'
          >
            <g filter='url(#a)'>
              <path
                fill='#AD791C'
                d='m183.221 5 236.334 178.22-178.22 236.334L5.001 241.334z'
              />
            </g>
            <defs>
              <filter
                id='a'
                width='434.554'
                height='434.554'
                x='0'
                y='0'
                colorInterpolationFilters='sRGB'
                filterUnits='userSpaceOnUse'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  result='hardAlpha'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dx='5' dy='5' />
                <feGaussianBlur stdDeviation='5' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix values='0 0 0 0 0.0862745 0 0 0 0 0.105882 0 0 0 0 0.113725 0 0 0 0.23 0' />
                <feBlend
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_116_197'
                />
                <feBlend
                  in='SourceGraphic'
                  in2='effect1_dropShadow_116_197'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className='md:w-1/2 space-y-3 text-white  flex flex-col h-full items-center '>
          <div className='flex flex-col items-center justify-center h-full  space-y-5'>
            <div className='capitalize text-3xl text-roboto font-bold text-center md:text-left'>
              Don’t miss a thing!
            </div>
            <p className='mx-10'>
              Subscribe with Email and loads of interesting news will be sent to
              you.
            </p>

            <div className='flex items-center h-10 mx-5 md:mx-0  '>
              <input
                type='email'
                name='email'
                className='py-2 rounded-l-lg px-5 w-full text-black'
                placeholder='Your Email Here '
              />
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSe67TpJXN7l2jFszUBzgpcQRg9DCU5Sn2gvJcW4QYJ48tFUjw/viewform'
                target='_blank'
                rel='noreferrer'
              >
                <button
                  type='submit'
                  className='py-2 bg-black text-white px-5 rounded-r-lg '
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
              <a>resources</a>
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
            <span className='font-bold'> Email:</span>
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
