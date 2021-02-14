import { Main } from 'next/document';
import { createGlobalStyle } from 'styled-components';
import { MainPrimary } from '../constants/stylesConstants';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Roboto', 'sans-serif';
  }

  body > div {
    min-height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  main {
    flex: 1;
    background-color: ${MainPrimary}; 
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
