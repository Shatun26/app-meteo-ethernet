import type { AppProps } from 'next/app';
import GlobalStyle from '../assets/styles/global';
import { ThemeLayout } from '../components/layout/layout/theme-layout';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ThemeProvider } from 'styled-components';
import { themes } from '../constants/theme';
import Head from 'next/head';
import { SkeletonTheme } from 'react-loading-skeleton';
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeLayout>
        <Head>
          <title>Meteo Ethernet</title>
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeLayout>
    </Provider>
  );
};

export default App;
