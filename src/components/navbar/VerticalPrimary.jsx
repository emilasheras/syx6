import Logo from "../logo/Logo.jsx";
import Links from "../anchor-links/Links.jsx";
import CartWidget from "../cart/CartWidget.jsx";
import { navbarVertical } from "../../data/s6-styles.js";
import DrawerMenuNavbar from "../drawer-menu/DrawerMenuNavbar.jsx";

export default function NavBar() {
    return (
        <nav className={navbarVertical}>
            <Logo/>
            <Links/>
            <CartWidget/>
            <DrawerMenuNavbar/>
        </nav>
    )
}