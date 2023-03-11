import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        color: #333333;
    }

    .container{
        inline-size: 90%;
        margin: 0 auto;
    }

    input{
        padding: 1rem;
        border-radius: 0.7rem;
        color: #333333;
        font-family: 'Montserrat', sans-serif; 
        border: none;
        inline-size: 50%;
    }

    input:hover{
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    }

    input::placeholder{
        color: #e2e2e2;
        font-family: font-family: 'Montserrat', sans-serif;
    }
`

export default Global;