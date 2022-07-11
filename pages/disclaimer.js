import React from 'react';

function disclaimer() {
  return (
    <div>
      <div className='text-primary text-5xl text-center py-10 font-roboto font-bold'>
        AFFILIATE DISCLAIMER
      </div>
      <div className='max-w-5xl mx-auto pb-20 text-center text-gray-800 space-y-2'>
        <div> WEBSITE DISCLAIMER</div>
        <div>
          The information provided by the Future Group (“we,” “us” or “our”) on
          https://www.thefuturegp.com (the “Site”) is for general informational
          purposes only. All information on the Site is provided in good faith,
          however we make no representation or warranty of any kind, express or
          implied, regarding the accuracy, adequacy, validity, reliability,
          availability or completeness of any information on the Site.
        </div>
        <div>
          UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS
          OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR
          RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE
          AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN
          RISK.
        </div>
      </div>
    </div>
  );
}

export default disclaimer;
