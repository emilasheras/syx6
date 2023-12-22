// AppRoutes.jsx
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Pages
const IdxPageMain = React.lazy(() => import("/src/pages/IdxPage"));
const HmePageMain = React.lazy(() => import("/src/pages/HmePage"));
const GlrPageMain = React.lazy(() => import("/src/pages/GlrPage"));
const NxsPageMain = React.lazy(() => import("/src/pages/NxsPage"));
const ShpPageMain = React.lazy(() => import("/src/pages/ShpPage"));
const ClgPageMain = React.lazy(() => import("/src/pages/ClgPage"));
const AbtPageMain = React.lazy(() => import("/src/pages/AbtPage"));
import NotFoundPageMain from "/src/pages/NotFoundPage";
// Gallery Subpages
const AssetPageMain = React.lazy(() => import("/src/pages/glr/AssetPage"));

// Data 
import urlData from "/src/data/s6-url-data";
import syxlog from "/src/utils/syxlog";
import RoutesFromJson from "./RoutesFromJson"; 

const AppRoutes = () => {
    let location = useLocation();

	React.useEffect(() => {
		// Log the path to understand when re-renders occur
		syxlog.out("Navigated to:", location.pathname);
	}, [location]);


    const componentMapping = {
		"index": IdxPageMain,
		"home": HmePageMain,
		"gallery": GlrPageMain,
		"nexus": NxsPageMain,
		"shop": ShpPageMain,
		"changelog": ClgPageMain,
		"about": AbtPageMain,
		"asset": AssetPageMain,
		"enhance": () => <div>EnhancePage [to do: add content]</div>, //! Placeholder
		"process": () => <div>ProcessPage [to do: add content]</div>, //! Placeholder
	};

	return (
		<Routes>
			{/* All pages in Url JSON file */}
			{ RoutesFromJson({urlData, componentMapping}) }

			{/* Redirect `/` => `IdxPage` */}
            <Route path="/" element={<Navigate to={"/pages/idx"} />} />

			{/* Redirect `*` => `NotFoundPage` */}
            <Route path="/pages/not-found" element={<NotFoundPageMain />} />
            <Route path="*" element={<Navigate to={"/pages/not-found"} />} />
		</Routes>
	);
};

export default AppRoutes;
