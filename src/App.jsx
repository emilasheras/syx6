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
import Layout from "./components/layout/Layout";
import HeaderDefault from "./components/header/HeaderDefault";
import SearchBar from "./components/searchbar/SearchBar";
import FooterDefault from "./components/footer/FooterDefault";
import AppRoutes from "./components/routes/AppRoutes";

/**
 * Data & Custom Hooks/Functions
 */
import syxlog from "./utils/syxlog";
import getLoadingJSX from "./components/loading-scaffold/getLoadingJSX";

import { CartProvider } from "./contexts/CartContext";

const App = () => {
	syxlog.out(`[Call] App()`);
	return (
		<CartProvider>
			<Router>
				<Layout header={<HeaderDefault />} footer={<FooterDefault />}>
					<SearchBar />
					<Suspense fallback={getLoadingJSX()}>
						{/* BEGIN: Wrap AppRoutes with CartProvider */}
						<AppRoutes />
						{/* END: Wrap AppRoutes with CartProvider */}
					</Suspense>
				</Layout>
			</Router>
		</CartProvider>
	);
};

export default App;
