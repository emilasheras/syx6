/** IMPORTS **/

/**
 * CSS
 */
import "bootstrap/dist/css/bootstrap.min.css"; // <- import bootstrap css
import "./scss/main.scss"; // <- After bootstrap for precedence

/**
 * REACTJS
 */
import Layout from "./components/Layout";
import { MainContent, HeaderContent, FooterContent } from "./pages/HomePage";
import SearchBar from "./components/SearchBar";

/**
 * Represents the entire application
 * @component
 * @returns {JSX.Element} - The entire application
 */
const App = () => {
	// const isSearchbarEnabled = false;
	return (
		<Layout
			main={
				<>
					<SearchBar/>
					<MainContent />
				</>
			}
			header={<HeaderContent />}
			footer={<FooterContent />}
		/>
	);
};

export default App;