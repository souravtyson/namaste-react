import { StrictMode } from "react"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
    return (
        // <StrictMode>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        // </StrictMode>
    )
}

export default AppLayout