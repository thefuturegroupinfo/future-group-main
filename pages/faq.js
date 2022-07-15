import React from 'react';
import Faq from '../components/Faq/Faq';

function index() {
  return (
    <div className='max-w-2xl mx-auto'>
      <div className='section-title  text-center my-8 text-3xl lg:text-5xl'>
        Frequently asked Questions
      </div>
      <div className='space-y-6 py-10 mx-10 lg:mx-4 '>
        <Faq
          q='WHAT IS THE MINIMUM INVESTMENT?'
          a='For each purchase, the minimum investment varies, although it usually starts from $150,000.'
        />
        <Faq
          q='WHAT KIND OF RETURNS CAN INVESTORS EXPECT?'
          a={`Real estate offers three basic sorts of returns: cash flow, principal reduction (100-120% tax depreciation benefit of money invested), and appreciation. Some investments provide a mix of the aforementioned benefits, although they all differ from one property to another. If you'd need more detailed information about total returns, please get in touch with us.`}
        />
        <Faq
          q='WHAT IMPLICATIONS DO THESE HAVE FOR MY PERSONAL TAXES?'
          a={`The organization in which you are investing will send you a K-1. Holding real estate, particularly multifamily, has tax advantages, but please consult your CPA to see how they may affect you.`}
        />
        <Faq
          q='CAN I USE MY IRA OR 401(K) TO INVEST?'
          a={`Yes, You may invest in our programs using your self-directed IRA or solo 401(k). To get more information, speak with your CPA.`}
        />
        <Faq
          q='WHERE CAN I VIEW YOUR CURRENT OFFERINGS?'
          a={`We are unable to openly publish or promote our existing offers due to SEC rules. If you're interested in investing, get in touch with us.`}
        />
        <Faq
          q='ANY OTHER QUESTIONS?'
          a={`We are unable to openly publish or promote our existing offers due to SEC rules. `}
        />
      </div>
    </div>
  );
}

export default index;
