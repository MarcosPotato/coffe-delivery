import { GlobalStyles } from "./styles/global"
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from "./theme/defaultTheme"
import { CartButton } from "./components/Buttons/CartButton"

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={ DefaultTheme }>
      <GlobalStyles />
      <CartButton action="show" />
      <CartButton action="add" />
      <CartButton action="show" totalItens={ 10 }/>
    </ThemeProvider>
  )
}