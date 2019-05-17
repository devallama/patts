import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('/fonts/Fira/fira.css');

    body {
        padding: 0;
        margin: 0;
        font-family: 'Fira Sans', sans-serif;
    }

    h2 {
        font-weight: 300;
    }

    a {
        color: #00d694;
        text-decoration: none;
    }
`;