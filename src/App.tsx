import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CycleContextProvider } from './contexts/cycleContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* /work_timer (github pages deploy) */}
      <BrowserRouter basename="/work_timer">
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
