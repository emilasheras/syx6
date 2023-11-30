import Logo from "./Logo";
import Links from "./Links.jsx";
import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
    console.log('NavBar Rendered');
    return (
        <nav className="navbar-vertical">
            <Logo/>
            <Links/>
            {/* <ButtonNavBarOptions/> */}
            <CartWidget/>
        </nav>
    )
}