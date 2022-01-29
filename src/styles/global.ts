import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF
    --red: #F00;
    --blue: #1094FF;
    --green: #00FF63;
    --yellow: #FFD610;
    --purple: #9000D9;

    --text: #5A5773;

    --background: #F8F7FB
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (min-width: 720px) {

    }
  } 

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;