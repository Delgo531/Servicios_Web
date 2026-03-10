import { Outlet } from "react-router-dom";
import NavbarAuth from "../components/navbarAuth";

function Home() {
    return (
        <>
            <NavbarAuth />
            <div className="Container">
                <Outlet></Outlet>
            </div>
        </>
    );
};
export default Home;