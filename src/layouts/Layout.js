import Header from "../components/Heder";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";

function Layout() {

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
export default Layout;