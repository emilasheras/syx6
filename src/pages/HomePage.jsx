import Footer from "../components/Footer";
import NavBar from "../components/NavBarVertical";
// import ItemListContainer from "../components/ItemListContainer"; //!testing
import SearchBar from "../components/SearchBar";

export function HeaderContent() {
    console.log('HeaderContent Rendered');
    return <NavBar/>;
}

export function MainContent() {
    console.log('MainContent Rendered');

    // todo: Implement the sections

    // Practice file
    // <ItemListContainer a={1} b={4}/> 
    return (
        <>
            <SearchBar/>
            <h1>MainContent</h1>
            <p>This is the main content</p>
        </>
    );
}

/**
 * @component
 * @returns {JSX.Element} - The footer
 */
export function FooterContent() {
    console.log('FooterContent Rendered');
    return <Footer/>;
}
