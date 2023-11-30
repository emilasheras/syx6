import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";
// import SearchBar from "../components/SearchBar"; //todo: Finish implementing the searchbar

export function HeaderContent() {
    console.log('HeaderContent Rendered');
    return (
        <>
        <NavBar/>
        </>
    )
}

export function MainContent() {
    console.log('MainContent Rendered');
    return (
        <>
        <ItemListContainer greeting="Welcome to the store!"/>
        {
        // <SearchBar/>

		// <section class="s6-layout-read">
            // <Section1/>
			// <hr />
            // <Section2..n/>
        // </section>

        }

        </>
    )
}

// todo: Implement the sections
// todo: Implement the footer
{
/*
<footer class="text-center">
    <slot id="footer"></slot>
</footer>
*/
}