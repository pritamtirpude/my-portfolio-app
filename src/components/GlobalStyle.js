import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,*::before,*::after{
        margin  : 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --color-background: #1A1A1D;
        --color-nav-background: #282828;
        --color-headings: #3AAFA9;
        --color-text: #DEF2F1;
        --color-white: #FEFFFF;
        --color-accent: #2B7A78;
    }

    html{
        font-size: 62.5%;
    }

    body{
        min-height: 100vh;
        font-family: 'League Spartan', sans-serif;
        font-size: 1.8rem;
        background: var(--color-background);
        overflow-x: hidden;
    }

    ul{
        list-style-type: none;
    }

    a{
        text-decoration: none;
    }

    input,button{
        font-family: inherit;
        border: none;
        cursor: pointer;
    }
`;

export default GlobalStyle;
