import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background: #E5E5E5;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, select{
        font-family: "Archivo", sans-serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 500;
        font-family: "Archivo", sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
