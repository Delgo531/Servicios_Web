import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function Index() {
    return (
        <>
            <Navbar></Navbar>
            <div className="Container">
                <Outlet></Outlet>
            </div>
        </>

    );
}
export default Index;