import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[5]}px;
  background-color: #fff;
  color: #2a2a2a;
  line-height: 1.3;
  font-family: ${p => p.theme.fonts.body};
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: ${p => p.theme.space[0]}px;
}

p {
  margin-top: ${p => p.theme.space[0]}px;
}
`;
