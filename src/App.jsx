import { Theme } from "./styles/themes/Theme";
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <Theme>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </Theme>
  )
}
