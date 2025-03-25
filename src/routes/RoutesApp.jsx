import { Route, Routes } from "react-router"
import { MainPage } from "../pages/MainPage"
import { OrderPage } from "../pages/OrderPage"
import { LogInPage } from "../private/LogInPage"
import { AdminPage } from "../private/AdminPage"
import { AdminOrderHistory } from "../private/AdminOrderHistory"
import { MenuPage } from "../pages/MenuPage"



export const RoutesApp = () => {

    return (
        <Routes>
            <Route path="/" element= {<MainPage/>}/>
            <Route path="/menuPage" element= {<MenuPage/>}/>
            <Route path="/orderPage" element= {<OrderPage/>}/> 
            <Route path="/logInPage" element= {<LogInPage/>}/> 
            <Route path="/adminPage" element= {<AdminPage/>}/>
            <Route path="/adminOrderHistory" element= {<AdminOrderHistory/>}/> 
        </Routes>
    )
} 