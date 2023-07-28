import { ThemeProvider } from 'styled-components'

import { AppTheme } from './styles/global'
import { theme } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <span>ignite-react-js-project-timer</span>

      <AppTheme />
    </ThemeProvider>
  )
}
