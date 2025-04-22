import { createGlobalStyle } from "styled-components";



export const StyledGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
  }

  body {
    background-color: #071422;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }
`
