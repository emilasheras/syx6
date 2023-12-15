/** IMPORTS **/
/**
 * Css
 */
import "bootstrap/dist/css/bootstrap.min.css"; // <- import bootstrap css
import "./scss/main.scss"; // <- After bootstrap for precedence

/**
 * React
 */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/** 
 * Layout 
 */
import Layout from "./components/Layout";
import HeaderDefault from "./components/header/HeaderDefault";
import SearchBar from "./components/SearchBar";
import FooterDefault from "./components/Footer/FooterDefault";
/** Pages */
import NotFoundPageMain from "./pages/NotFoundPage";
import IdxPageMain from "./pages/IdxPage";
//todo import HmePageMain from "./pages/HmePage";
//todo import GllPageMain from "./pages/GllPage";
//todo import NxsPageMain from "./pages/NxsPage";
//todo import ShpPageMain from "./pages/ShpPage";
//todo import ClgPageMain from "./pages/ClgPage";
//todo import AbtPageMain from "./pages/AbtPage";

/**
 * Data
 */
import urlData from "./data/s6-url-data";

const App = () => {
	return (
		<Router>
			<Layout
				main={
				<>
					<SearchBar />
					{getJSXContent()}
				</>
				}
				header={<HeaderDefault/>}
				footer={<FooterDefault />}
			/>
		</Router>
	);
};

const getJSXContent = () => {
	const pageComponents = {
		// todo: import this components at the top of the file once the page migration is done from s6
		idx: IdxPageMain,
		// hme: HmePageMain,
		// gll: GllPageMain,
		// nxs: NxsPageMain,
		// shp: ShpPageMain,
		// clg: ClgPageMain,
		// abt: AbtPageMain,

		//! PLACEHOLDERS
		hme: () => (<>HmePageMain Placeholder</>),
		gll: () => (<>GllPageMain Placeholder</>),
		nxs: () => (<>NxsPageMain Placeholder</>),
		shp: () => (<>ShpPageMain Placeholder</>),
		clg: () => (<>ClgPageMain Placeholder</>),
		abt: () => (<>AbtPageMain Placeholder</>),
	};


	return(
		<Routes>
			<Route path="/" element={<IdxPageMain/>}/> 
			{
				urlData.map(({abbreviation,subdirectory,path}, index) => {
					try {						
						const currentMain = pageComponents[abbreviation];
						if(currentMain === undefined) throw Error(`The [${abbreviation}] abbreviation index wasnt found inside the [pageComponents] object, but is defined in [s6-url-data.js]`);
						return <Route 
							key={index} 
							path={subdirectory+path} 
							element={React.createElement(currentMain)}
						/>
					} catch (error) {
						console.error(error);
					}
				})
			}
			<Route path="*" element={<NotFoundPageMain/>}/>
		</Routes>
	);
}

export default App;