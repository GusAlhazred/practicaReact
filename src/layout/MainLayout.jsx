import { Outlet } from "react-router-dom"
import { Header } from "../assets/components/Header/Header"

export const MainLayout = () => {

    return <>
        <Header />
        <div>
            <Outlet />
        </div>
    </>
  
}