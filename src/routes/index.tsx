import { Route, BrowserRouter, Routes } from "react-router-dom"

import { DefaultLayout } from "../layout/Default"
import { Cart } from "../pages/cart"
import { FinishPayment } from "../pages/finishPayment"
import { Home } from "../pages/home"

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <DefaultLayout/> }>
                    <Route path="/" element={ <Home/> } />  
                    <Route path="/cart" element={ <Cart/> } />
                    <Route path="/finished" element={ <FinishPayment/> } />  
                </Route>
            </Routes>
        </BrowserRouter>
    )
}