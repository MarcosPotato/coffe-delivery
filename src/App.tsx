import { createServer } from "miragejs"
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from "./styles/global"
import { DefaultTheme } from "./theme/defaultTheme"
import { AppRoutes } from "./routes"
import { CartProvider } from "./context/cart"

import { Coffees } from './data/coffees'

createServer({
  routes(){
    this.namespace = "api",
    this.get("/coffees", () => Coffees)
  }
})

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={ DefaultTheme }>
      <GlobalStyles />
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </ThemeProvider>
  )
}