import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  :root {
    /* Colors */
    --yellow: #fcdb00;
    --white: #fff;
    --black-1: #010101;
    --black-2: #313841;
    --black-3: #555555;

    /* Typography */
    --main-font: 'PT Sans', sans-serif;

    /* Units */
    --container-xl: 71.25rem; // 1140px
    --container-lg: 60rem; // 960px
    --container-md: 45rem; // 720px
    --container-sm: 33.75rem; // 540px
    --gutter: .625rem; // 10px
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    color: var(--black-1);
    font-size: 1rem;
    font-family: var(--main-font);
  }

  a {
    color: var(--black-1);
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button {
    cursor: pointer;
    display: block;
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    width: 100%;
    padding-left: calc(var(--gutter) * 2);
    padding-right: calc(var(--gutter) * 2);

    @media (min-width: 576px) {
      padding-left: var(--gutter);
      padding-right: var(--gutter);
      max-width: var(--container-sm);
    }

    @media (min-width: 768px) {
      max-width: var(--container-md);
    }

    @media (min-width: 992px) {
      max-width: var(--container-lg);
    }
  }
`;

export default GlobalStyle;
