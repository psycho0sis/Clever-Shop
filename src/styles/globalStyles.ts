import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 :root {
  /** Colors */

  --dark: #121212;
  --dark-grey: #9c9c9c;
  --grey: #e5e5e5;
  --gr-white: #f8f8f8;
  --white: #fff;
  --pink: #e91e63;
  --yellow: #f0cc84;
  --red: #d61313;
  --green: #0bb17f;

  /** With transparency */

  --dark-shadow: rgb(18 18 18 / 40%);
  --white-08: rgb(255 255 255 / 80%);
}

* {
  margin: 0;
  padding: 0;
  border: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

a:focus,
a:active {
  outline: none;
}

a,
a:visited, 
a:hover {
  text-decoration: none;
}


nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 100%;
  font-size: 14px;
  line-height: 1;
}

input,
button,
textarea {
  font-family: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
  font-size: inherit;
}
`;
