import { Outlet } from "react-router";
import logo from "../assets/STREAK.UZ.svg"
const MainLayout = () => {


    return (
        <>
            <header className="container">
            <div className="p-[18px]">
                <img src={logo} alt="" />
            </div>
            </header>
            <Outlet />
            <footer>

            </footer>
        </>


    );
};

export default MainLayout;
