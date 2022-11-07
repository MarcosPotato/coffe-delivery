import { Route, BrowserRouter, Routes } from "react-router-dom"

import { DefaultLayout } from "../layout/Default"
import { Home } from "../pages/home"

export const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <DefaultLayout/> }>
                    <Route path="/" element={ <Home/> } />  
                </Route>
            </Routes>
        </BrowserRouter>
    )
}