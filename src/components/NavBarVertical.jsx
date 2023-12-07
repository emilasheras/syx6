import Logo from "./Logo.jsx";
import Links from "./Links.jsx";
import CartWidget from "./CartWidget.jsx";
import { navbarVertical } from "../data/s6-styles.js";
import DrawerMenuNavbar from "./DrawerMenuNavbar.jsx";

export default function NavBar() {
    console.log('NavBar Rendered');
    return (
        <nav className={navbarVertical}>
            <Logo/>
            <Links/>
            <CartWidget/>
            <DrawerMenuNavbar/>
        </nav>
    )
}