import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialised;
}

body, input, textarea, button {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

body {
  background-color: #0f0f0f;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}
`