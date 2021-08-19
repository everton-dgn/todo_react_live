import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
    color: #1a2d5a;
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding: 2rem;
    background-image: linear-gradient(to right, #F7F8F9, #d6d9e1);
  }
  
  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: 600;
  }
  
  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
  
  h1, h2, p {
    word-break: break-word;
  }
`
