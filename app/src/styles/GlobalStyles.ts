import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  body {
    background: #f8f8f8;
    color: #29292e;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    padding: 0;
  }

  button {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
    transition: all 300ms;

    &:hover {
      filter: brightness(75%);
    }
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .link{
    cursor: pointer;
    transition: filter 0.2s;

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }
  }

`;

export const Container = styled.div.attrs({
  className: "styled-container"
})`
  height: 100%;
  margin: 0 auto;
`;

