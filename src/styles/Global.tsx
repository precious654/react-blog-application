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
    }

    .container{
        inline-size: 90%;
        margin: 0 auto;
    }
`

export default Global;