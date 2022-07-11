import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='max-w-7xl mx-auto'>
        <Header />
      </div>
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
