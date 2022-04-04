import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
}
`;

export default Global;
