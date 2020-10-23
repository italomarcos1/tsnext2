import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  
  body {
    background-color: #121214;
    color: #fff;
    font-family: Roboto, Arial, Helvetica, sans-serif;
  }

  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div
  {
    height: 100%;
  }

  button, a {
    cursor: pointer;
    user-select: none;
  }

  ul {
    list-style: none;
  }
`;
