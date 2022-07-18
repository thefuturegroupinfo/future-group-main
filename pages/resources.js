import Image from 'next/image';
import React from 'react';
import ResourceCard from '../components/resources/ResourceCard';

function index() {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='section-title text-center'>Resources</div>
      <h5 className='text-center font-roboto  font-bold pt-5 pb-5 text-gray-800 px-5 lg:text-2xl'>
        <strong>
          Best books to understand and learn about Real estate investment for
          beginners
        </strong>
      </h5>

      <div className='relative h-72 md:h-96 lg:h-[700px] py-7'>
        <Image src='/static/images/blog.png' alt='bolog' layout='fill' />
      </div>
      <p className='text-gray-800 py-8 px-5 text-justify'>
        Do you want to increase your wealth, generate passive income, and
        diversify your investments? Well, purchasing real estate could be a
        smart decision. However, it would be advantageous if you have the
        requisite understanding and abilities to thrive in this dynamic market
        and generate excellent returns. Reading real estate books authored by
        expert real estate investors is one approach to obtain knowledge about
        the industry. When you learn about the successes and failures of real
        estate legends, you will position yourself for success. The real estate
        investment books listed below can provide you with a wealth of
        knowledge. You may learn from the case studies of the most well-known
        investors who have extensive experience in real estate investment from
        these books. Here are some recommended real estate investing books:
      </p>

      <div className='flex flex-col  pb-52'>
        <ResourceCard
          image='/static/images/books/0 2.jpg'
          title='1. The Book on Investing In Real Estate with No (and Low) Money Down'
          link={
            'https://www.amazon.com/Book-Investing-Real-Estate-Money/dp/1947200976/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1657568729&sr=1-1'
          }
          description={`Is a shortage of funds preventing you from achieving your real estate goals? Learn the innovative real estate financing strategies that smart investors apply to close more deals, more frequently. There will always be real estate you cannot afford, regardless of how much money you have in your checking account. Don't allow what's in your wallet to determine what your future holds! This book gives several techniques for leveraging other people’s money for great returns on your initial investment.

          Brandon Turner, an active real estate investor and co-host of The BiggerPockets Podcast, dives into the various financing strategies used by seasoned investors to capitalize on the current real estate markets. You'll not only be able to manage the complex world of innovative real estate financing, but whatever real estate investing plan you choose will provide greater returns. 
          
          Deal financing has become simpler; discover how to be a wise investor by utilizing your imagination rather than money!
          `}
        />

        <ResourceCard
          image='/static/images/books/0 5.jpg'
          title='2. The Intelligent Investor'
          link='https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661/ref=sr_1_1?keywords=the+intelligent+investor&qid=1657896034&s=books&sprefix=the+inte%2Cstripbooks%2C124&sr=1-1'
          description={`Benjamin Graham, the best investing counselor of the 20th century, inspired and taught individuals all over the world. The Intelligent Investor has served as the stock market bible ever since it was first published in 1949 because of Graham's "value investing" theory, which protects investors from significant mistakes and helps them to construct long-term plans.

          Market changes throughout time have validated Graham's tactics as sound. The updated commentary by renowned financial journalist Jason Zweig is included in this revised edition while maintaining the integrity of Graham's original text. Zweig's viewpoint incorporates the realities of the current market, draws comparisons between Graham's examples and current financial headlines, and gives readers a deeper understanding of how to apply Graham's principles. This HarperBusiness Essentials edition of The Intelligent Investor is the most important book you will ever read on how to achieve your financial objectives. It is essential and irreplaceable.`}
        />

        <ResourceCard
          title='3. The Book on Rental Property Investing'
          image='/static/images/books/0 3.jpg'
          link='https://www.amazon.com/Book-Rental-Property-Investing-Intelligent/dp/099071179X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1657895964&sr=1-1'
          description='This best-selling business book will teach you exactly how to achieve financial freedom through real estate investing. The Book on Rental Property Investing, with approximately 400 pages of in-depth guidance, teaches innovative and useful ideas that real estate investors all over the world are adopting to generate sizable cash flow from rental properties.

            The BiggerPockets Podcast co-host and current real estate investor Brandon Turner talks down the tried-and-true methods he employed to create his own real estate fortune. You will discover how to make a workable strategy, uncover amazing bargains, assess properties, establish a team, finance rents, and much more—everything you need to do to become a billionaire property investor, whether you are just starting out or already own hundreds of units.'
        />

        <ResourceCard
          title='4. Live Richer Challenge'
          link='https://www.amazon.com/Book-Rental-Property-Investing-Intelligent/dp/099071179X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1657895964&sr=1-1'
          description={`My hunch is that you have a lot of financial issues. Your debt is out of control; you don't have a budget; your savings account is beyond its prime, and you don't understand investing. You also have a low credit score. Do any of these scenarios ring a bell with you? You are in the precise place if so. You will learn how to start shifting the following throughout the ensuing five weeks: Week 1. Money Mindset - Week 2. Budgeting & Savings - Week 3. Debt - Week 4. Credit - Week 5. Insurance & (starting) Investing - Final Day. STAY RICHER. For newcomers who desire a breadcrumb path to financial success, the LIVE RICHER Challenge is appropriate. With only a few easy, everyday financial activities, this book will teach you how to control your finances in just 36 days. Are you ready? Let's go!`}
          image='/static/images/books/0.jpg'
        />

        <ResourceCard
          title='5. Investing in Rental Properties for Beginners'
          link='https://www.amazon.com/Investing-Rental-Properties-Beginners-Rent-ebook/dp/B07G56SNBJ/ref=sr_1_1?crid=16G5NX0485AEO&keywords=investing+in+Rental+Properties+for+Beginners%3A+Buy+Low%2C+Rent+High&qid=1657568683&s=digital-text&sprefix=investing+in+rental+properties+for+beginners+buy+low%2C+rent+high%2Cdigital-text%2C79&sr=1-1'
          description={`What if I told you that generational wealth and passive income are your birthright? What if I told you that investing in low-cost communities was a means to RECLAIM our wealth? that it would have an impact on black communities across the country, be SAFE, and be ACCESSIBLE? Additionally, the cash flow is good.

          She is Lisa Phillips and has assisted thousands of investors nationwide in achieving financial freedom by advising them to buy houses in middle-class communities for between $30,000 and $50,000. A calling that has enabled thousands of professionals to access real estate investment at a price range they can afford is helping investors invest locally or out of state. This will show you, the average investor, how to adjust your investing plan to suit your financial needs alone. The greatest way to establish a rental portfolio is to buy properties in modest areas that give really high rents (i.e. buy a $44,000 rental that generates $1200 a month in rent); this way, you won't need to ask your parents or friends for loans. Get this book on investing in rental properties if you're ready to make your real estate fantasies a reality.`}
          image='/static/images/books/0 4.jpg'
        />

        <ResourceCard
          title='6. Financial Freedom with Real Estate Investing'
          link='https://www.amazon.com/Financial-Freedom-Real-Estate-Investing/dp/1986532364/ref=sr_1_1?crid=M6OJTS20RPGS&keywords=Financial+Freedom+with+Real+Estate+Investing%3A+The+Blueprint+To+Quitting+Your+Job+With+Real+Estate+-+Even+Without+Experience+Or+Cash&qid=1657568666&s=books&sprefix=financial+freedom+with+real+estate+investing+the+blueprint+to+quitting+your+job+with+real+estate+-+even+without+experience+or+cash%2Cstripbooks%2C88&sr=1-1'
          description={`Many individuals think that using a single-family home investment plan would enable them to realize their financial objectives. Real estate has long been a potent instrument for investing. However, apartment complexes offer a genuine route to utilize real estate to achieve financial freedom. Michael Blank, a real estate investing specialist and author, discovered that once investors completed their first deal, the odd "Law of the First Deal" quickly produced their second and third deals. Within three to five years of starting out, the majority were able to leave their occupations.

          Of course, the majority of people automatically feel they need years of investment knowledge and money saved up to be able to enter into the game when they hear "apartment buildings." Simply said, this is untrue. Financial Freedom with Real Estate Investing: The Blueprint to Quitting Your Job with Real Estate - Even without Experience or Cash, is the latest book by Michael that compiles the findings of his study. Even if you have no prior expertise or your own money, he has laid out the "Financial Freedom Blueprint" that will lead you through your first multifamily acquisition.`}
          image='/static/images/books/0 6.jpg'
        />

        <ResourceCard
          title='7. Hold: How to Find, Buy, and Rent Houses for Wealth'
          link='https://www.amazon.com/HOLD-Find-Rent-Houses-Wealth/dp/0071797041/ref=sr_1_1?crid=2WC2ADV4MCRZW&keywords=Hold%3A+How+to+Find%2C+Buy%2C+and+Rent+Houses+for+Wealth+%28Millionaire+Real+Estate%29&qid=1657568658&s=books&sprefix=hold+how+to+find%2C+buy%2C+and+rent+houses+for+wealth+millionaire+real+estate+%2Cstripbooks%2C80&sr=1-1'
          image='/static/images/books/0 9.jpg'
          description={`
          Secure your financial future by taking action! Learn how to use real estate to achieve financial freedom. The third and final volume of Gary Keller's Millionaire Real Estate Investor trilogy explains how to build financial riches using a tried-and-true real estate investment strategy: 1. Locate the ideal house at the ideal price and with the ideal conditions. 2. Examine an offer to ensure that the figures and conditions make sense. 3. Purchase an investment property where you can profit from the start. 4. Manage a property until it is paid for or until you have enough equity to borrow against. 5. Develop yourself to become wealthy and financially free.`}
        />
        <ResourceCard
          title='8. The Book on Flipping Houses'
          link='https://www.amazon.com/Book-Flipping-Houses-Residential-Properties/dp/1947200100/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1657568647&sr=1-1'
          description={`
          Are you motivated to quit your 9 to 5 job and start investing in real estate? Real Estate expert, fix-and-flipper J Scott lays out a step-by-step strategy for success in your first—or next—house flip in his book The Book on Flipping Houses. This updated version of the best-selling book offers fresh explanations of how to successfully flip properties at every stage of the economic cycle, more choices for financing your flips, and an emphasis on more extensive renovations that were not previously covered.

          This straightforward book includes a thorough flipping plan that is ideal for both the total novice and seasoned real estate professional. This simple-to-read book may serve as your roadmap if you want to establish a successful, effective house flipping business.`}
          image='/static/images/books/0 7.jpg'
        />

        <ResourceCard
          title='9. Buy It, Rent It, Profit!'
          link='https://www.amazon.com/Buy-Rent-Profit-Updated-Landlord/dp/1501145827/ref=sr_1_1?crid=9VQ08N8BPSRM&keywords=Buy+It%2C+Rent+It%2C+Profit%21+%28Updated+Edition%29%3A+Make+Money+as+a+Landlord+in+ANY+Real+Estate+Market&qid=1657568634&s=books&sprefix=buy+it%2C+rent+it%2C+profit+updated+edition+make+money+as+a+landlord+in+any+real+estate+market%2Cstripbooks%2C85&sr=1-1'
          image='/static/images/books/0 8.jpg'
          description={`
          There has never been a better moment to purchase rental homes because finance is more widely available and interest rates are low. But how does one start? Bryan M. Chavis, who founded The Landlord Property Management Academy and has more than twenty years of real estate expertise, is well-versed in all stages and facets of managing rental properties. In Buy It, Rent It, Profit!, he details the procedures and processes you must put in place to become a prosperous landlord and property manager and explains why rental properties are such a good investment in today's real estate market.
This revised edition of a modern classic offers guidance on becoming a successful and competent landlord, safeguarding your investment, understanding the kinds of property you ought to buy, and adjusting to the rapidly evolving real estate technology world. Chavis offers procedures for finding great tenants, negotiating leases, collecting rent, financing a mortgage, and managing the entire property—everything you need to become a shrewd, successful, and qualified property manager.`}
        />

        <ResourceCard
          title='10. The Book on Tax Strategies for the Savvy Real Estate Investor'
          link='https://www.amazon.com/Book-Strategies-Savvy-Estate-Investor-ebook/dp/B01BWDHLTQ/ref=sr_1_1?crid=MUTCEAP50HB4&keywords=The+Book+on+Tax+Strategies+for+the+Savvy+Real+Estate+Investor%3A+Powerful+techniques+anyone+can+use+to+deduct+more%2C+invest+smarter%2C+and+pay+far+less+to+the+IRS.&qid=1657568612&s=digital-text&sprefix=the+book+on+tax+strategies+for+the+savvy+real+estate+investor+powerful+techniques+anyone+can+use+to+deduct+more%2C+invest+smarter%2C+and+pay+far+less+to+the+irs.%2Cdigital-text%2C80&sr=1-1'
          description={`Do you hate filing your taxes? Having trouble maximizing deductions for your real estate business? The CPAs Amanda Han and Matthew MacFarland provide you with the useful knowledge you need to complete your taxes this year and to develop a long-term plan that will make doing your taxes the next year much simpler. It's time to take charge of your real estate company's bookkeeping procedures. Start saving money right away with a smart tax plan!`}
          image='/static/images/books/0 15.jpg'
        />

        <ResourceCard
          title='11. The Millionaire Real Estate Investor'
          image='/static/images/books/0 11.jpg'
          link='https://www.amazon.com/Millionaire-Real-Estate-Investor/dp/0071446370/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1657568594&sr=1-1'
          description={`
          Anyone who wants to become wealthy must first understand the underlying principles and thought processes that underpin it. The Wealthy Real Estate Investor is a compilation of the knowledge and experience of over 100 millionaire investors from all backgrounds who sought financial success and the liberation it brings. This book offers their tried-and-true tactics in an easy-to-read, basic format.`}
        />

        <ResourceCard
          title='12. The ABCs of Real Estate Investing'
          link='https://www.amazon.com/ABCs-Real-Estate-Investing-Investors/dp/1937832031/ref=sr_1_1?crid=S6R7TV15T8EY&keywords=The+ABCs+of+Real+Estate+Investing%3A+The+Secrets+of+Finding+Hidden+Profits+Most+Investors+Miss&qid=1657568585&s=books&sprefix=the+abcs+of+real+estate+investing+the+secrets+of+finding+hidden+profits+most+investors+miss%2Cstripbooks%2C83&sr=1-1'
          image='/static/images/books/0 10.jpg'
          description={`Finding the ideal bargain where you can profit from it should be your whole focus. Don't assume you must have a large personal fortune, start out modest, or be an expert in real estate to get started. Find hidden gems if the property is undervalued or the business isn't making as much money from the location as it might. There will then be enough of money left over for the bank, your investors, and yourself once the market or you right the ship.  Real estate investment allows you to sleep peacefully at night while accumulating incredible riches that will transform your life and the lives of your family if you put in the effort to thoroughly research the markets and properties, accurately assess the real income and costs, and improve operations.Real estate investment allows you to sleep peacefully at night while accumulating incredible riches that will transform your life and the lives of your family if you put in the effort to thoroughly research the markets and properties, accurately assess the real income and costs, and improve operations.`}
        />

        <ResourceCard
          title='13. Long-Distance Real Estate Investing'
          image='/static/images/books/0 12.jpg'
          link='https://www.amazon.com/Long-Distance-Real-Estate-Investing-State/dp/0997584750/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1657568565&sr=1-1'
          description={`Are you interested in real estate but you reside in a hot market where buy and hold investment is not recommended? Do you desire to seize wealth-building possibilities but believe that doing so won't be achievable till the subsequent market crash? Although real estate investment is one of the best ways to accumulate money, it is not appropriate in all markets. While some places make it nearly hard to discover a single property that is profitable, certain places provide great rewards. Traditionally, investing outside of your own country has been viewed as hazardous and foolish.However, the markets, technology, and laws have evolved, so you are no longer restricted to investing simply in your local area. In this book, police officer and real estate investor David Greene explains in detail how he acquired a multi-million dollar portfolio by purchasing, maintaining, and reselling properties outside of his home state—often without ever having set foot on the property. In order to help you avoid mistakes and accelerate your learning curve, David offers every strategy, technique, and system he has used for more than twenty rental properties.`}
        />

        <ResourceCard
          title='14. Trump: The Art of the Deal'
          link='https://www.amazon.com/Trump-Art-Deal-Donald-J/dp/0399594493'
          image='/static/images/books/0 13.jpg'
          description={`Here, we see Trump in action as he meets with the individuals he needs to meet, converses with family and friends, engages in conflict with adversaries, and questions the status quo. Trump has created tried-and-true rules for success, proving that even a maverick has rules. He breaks down myths, identifies names, spells out zeros, and thoroughly discloses the dealmaker's talent. He also isolates the common ingredients in his best successes. And Trump talks—really talks—about how he does it throughout. The ultimate book for anybody interested in the man behind the limelight is Trump: The Art of the Deal, an unfiltered glimpse into the mind of a great entrepreneur.`}
        />
        <ResourceCard
          title='15. Your First 365 Days in Real Estate: How to build a successful real estate business (starting with nothing)'
          image='/static/images/books/0 14.jpg'
          link='https://www.amazon.com/Your-First-Days-Real-Estate/dp/0857197606/ref=sr_1_1?crid=2NFXBJM57HF3X&keywords=Your+First+365+Days+in+Real+Estate%3A+How+to+build+a+successful+real+estate+business+%28starting+with+nothing%29&qid=1657568529&s=books&sprefix=your+first+365+days+in+real+estate+how+to+build+a+successful+real+estate+business+starting+with+nothing+%2Cstripbooks%2C80&sr=1-1'
          description={`One of the most trying periods of your career might be the first 365 days of working in real estate; it's full with difficult lessons, heartbreaks, and hard labor. You don't necessarily have a business just because you have a license. But if you get the crucial things right, you can have a prosperous future. This candid, enlightening, and wholly helpful insider's handbook teaches you how to succeed even if you're beginning from scratch.
          Shelley discusses her own experience as a rookie real estate agent, including how she established a name for herself in a brand-new city with only a network of four individuals.
          The book also includes worksheets, hot lists, and illustrations of excellent branding so you can get your company into the fast lane right now. Don't lose out on your potential as a realtor without Your First 365 Days in Real Estate, the industry's top resource for new agents..`}
        />
      </div>
    </div>
  );
}

export default index;
