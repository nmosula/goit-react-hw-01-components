import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
        :root {
          --black: #00000;
          --grey: #999999;
          --bg-grey: #e7f5f9;
          --aqua: #25b0d3;
          --white: #fff;
        }
        body {
          color: var(--black);
          font-weight: normal;
          font-size: 18px;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin: 0;
          padding: 0;
        }
        img {
          display: block;
          max-width: 100%;
          height: auto;
        }
        ul {
          list-style: none;
          margin: 0;
          padding-left: 0;
        }
        a {
          text-decoration: none;
          cursor: pointer;
        }
        a:focus {
          outline: none;
        }
        button {
          display: block;
          margin: 0 auto;
          cursor: pointer;
          border: none;
        }
        button:focus {
          outline: none;
        }
      `