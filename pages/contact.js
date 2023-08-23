import Image from 'next/image';
import React from 'react';
import Icons from '../components/Icons/Icons';

function index() {
  return (
    <div>
      <div className='pt-10'>
        <div className='text-primary text-3xl  md:text-5xl font-bold text-center font-roboto'>
         Fill Out The Form
        </div>
        <div>
              <iframe
  src="https://api.leadconnectorhq.com/widget/form/cpFqhVMvdeoXtd2MxQjS"
  style="width:100%;height:100%;border:none;border-radius:4px"
  id="inline-cpFqhVMvdeoXtd2MxQjS" 
  data-layout="{'id':'INLINE'}"
  data-trigger-type="alwaysShow"
  
  data-trigger-value=""
  data-activation-type="alwaysActivated"
  data-activation-value=""
  data-deactivation-type="neverDeactivate"
  data-deactivation-value=""
  data-form-name="Form 1"
  data-height="1498"
  data-layout-iframe-id="inline-cpFqhVMvdeoXtd2MxQjS"
  data-form-id="cpFqhVMvdeoXtd2MxQjS"
  title="Form 1"
      >
</iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
        </div>
        <div className='pt-10'>
        <div className='text-primary text-3xl  md:text-5xl font-bold text-center font-roboto'>
      Found Us On
        </div>
            <div>
              <div className='flex space-x-6 items-center'>
                <div>
                  <a
                    href='https://twitter.com/ModrenG'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Icons icon='twitter' />
                  </a>
                </div>
                <div>
                  <a
                    href='https://www.linkedin.com/in/vijay-patel-dpt-92a40573'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='#2F234F'
                    >
                      <path
                        d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                        fill="#2F234F'"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    href='https://web.telegram.org/k/#@vp9960'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Icons icon='telegram' />
                  </a>
                </div>
                <div>
                  <a
                    href='https://www.facebook.com/vj.patel.92102'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <Icons icon='facebook' />
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

export default index;
