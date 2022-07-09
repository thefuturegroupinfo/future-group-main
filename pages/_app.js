import Footer from '../components/Footer/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {' '}
      <Component {...pageProps} />
      <div>
        <div className='h-72 bg-[#AD791C]'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
