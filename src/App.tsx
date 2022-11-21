import { createServer } from "miragejs"
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from "react-toastify"

import { GlobalStyles } from "./styles/global"
import { DefaultTheme } from "./theme/defaultTheme"
import { AppRoutes } from "./routes"
import { CartProvider } from "./context/cart"

import { Coffees } from './data/coffees'

import 'react-toastify/dist/ReactToastify.css';
import { LocationProvider } from "./context/location"

createServer({
  routes(){
    this.passthrough("http://viacep.com.br/ws/**")
    this.namespace = "api",
    this.get("/coffees", () => Coffees)
    this.post("/request", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      console.log(attrs)
      return request.requestBody
    })
  }
})

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={ DefaultTheme }>
      <LocationProvider>
        <GlobalStyles />
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </LocationProvider>
      <ToastContainer position="top-right" autoClose={5000} closeOnClick theme="colored"/>
    </ThemeProvider>
  )
}