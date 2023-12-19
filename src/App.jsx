/** IMPORTS **/
/**
 * Css
 */
import "bootstrap/dist/css/bootstrap.min.css"; // <- import bootstrap css
import "./scss/main.scss"; // <- After bootstrap for precedence

/**
 * React
 */
import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

/**
 * Layout
 */
import Layout from "./components/Layout";
import HeaderDefault from "./components/header/HeaderDefault";
import SearchBar from "./components/SearchBar";
import FooterDefault from "./components/Footer/FooterDefault";
import AppRoutes from "./components/routes/AppRoutes";

/**
 * Data & Custom Hooks/Functions
 */
import syxlog from "./utils/syxlog";
import getLoadingJSX from "./components/loading-scaffold/getLoadingJSX";

const App = () => {
	syxlog.out(`[Call] App()`);
	return (
		<Router>
			<Layout header={<HeaderDefault />} footer={<FooterDefault />}>
				<SearchBar />
				<Suspense fallback={getLoadingJSX()}>
					<AppRoutes />
				</Suspense>
			</Layout>
		</Router>
	);
};

export default App;