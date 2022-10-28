import { GlobalStyles } from "./styles/global"
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from "./theme/defaultTheme"
import { Input } from "./components/Input"

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={ DefaultTheme }>
      <GlobalStyles />
      <Input placeholder="teste" optional type="password"/>
    </ThemeProvider>
  )
}