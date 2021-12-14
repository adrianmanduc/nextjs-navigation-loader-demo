import NavigationLoader from '../components/NavigationLoader';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationLoader/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
