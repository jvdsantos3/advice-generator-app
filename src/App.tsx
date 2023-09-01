import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Advice } from './components/advice'
import { Attribution } from './styles/app'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Advice />
      <Attribution>
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/jvdsantos3"
          target="_blank"
          rel="noreferrer"
        >
          João Vitor
        </a>
        .
      </Attribution>
    </ThemeProvider>
  )
}
