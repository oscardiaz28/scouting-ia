import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LandingPage } from "../pages/landing/LandingPage"
import { LoginPage } from "../pages/auth/LoginPage"
import { SignupPage } from "../pages/auth/SignupPage"
import { PrivateLayout } from "../layout/PrivateLayout"
import { DashboardPage } from "../pages/dashboard/DashboardPage"

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>


                <Route path="/" element={ <LandingPage /> } />
                <Route path="login" element={<LoginPage />} />
                <Route path="signup" element={<SignupPage />} />

                <Route path="/dashboard" element={ <PrivateLayout /> }>
                    <Route index element={ <DashboardPage /> } />    
                </Route>

            </Routes>        


        </BrowserRouter>
    )
}