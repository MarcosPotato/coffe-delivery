import { GlobalStyles } from "./styles/global"
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from "./theme/defaultTheme"
import { CartButton } from "./components/Buttons/CartButton"
import { RemoveButton } from "./components/Buttons/RemoveButton"

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={ DefaultTheme }>
      <GlobalStyles />
      <RemoveButton>
        Remover
      </RemoveButton>
    </ThemeProvider>
  )
}