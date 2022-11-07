import { GlobalStyles } from "./styles/global"
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from "./theme/defaultTheme"
import { AppRoutes } from "./routes"

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={ DefaultTheme }>
      <GlobalStyles />
      <AppRoutes />
    </ThemeProvider>
  )
}