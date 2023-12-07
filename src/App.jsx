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


/**
 * Represents the entire application
 * @component 
 * @returns {JSX.Element} - The entire application
 */
const App = () => {
	return (
		<Layout
			main={<MainContent />}
			header={<HeaderContent />}
			footer={<FooterContent />}
		/>
	);
}

export default App;