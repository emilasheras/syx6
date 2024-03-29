// AppRoutes.jsx
import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Pages
const IdxPageMain = React.lazy(() => import("../../pages/IdxPage"));
const HmePageMain = React.lazy(() => import("../../pages/HmePage"));
const GlrPageMain = React.lazy(() => import("../../pages/GlrPage"));
const NxsPageMain = React.lazy(() => import("../../pages/NxsPage"));
const ShpPageMain = React.lazy(() => import("../../pages/ShpPage"));
const ClgPageMain = React.lazy(() => import("../../pages/ClgPage"));
const AbtPageMain = React.lazy(() => import("../../pages/AbtPage"));
// Gallery Subpages
const AssetPageMain = React.lazy(() => import("../../pages/glr/AssetPage"));

// Data
import urlData from "../../data/s6-url-data";
import syxlog from "../../utils/syxlog";
import RoutesFromJson from "./RoutesFromJson";
import DefaultRoutes from "./DefaultRoutes";

const AppRoutes = () => {
	let location = useLocation();

	React.useEffect(() => {
		// Log the path to understand when re-renders occur
		syxlog.out("Navigated to:", location.pathname);
	}, [location]);

	const componentMapping = {
		index: IdxPageMain,
		home: () => <div>EnhancePage [to do: add content]</div>, //! Placeholder,
		gallery: GlrPageMain,
		nexus: NxsPageMain,
		shop: ShpPageMain,
		changelog: ClgPageMain,
		about: AbtPageMain,
		asset: AssetPageMain,
		enhance: () => <div>EnhancePage [to do: add content]</div>, //! Placeholder
		process: () => <div>ProcessPage [to do: add content]</div>, //! Placeholder
	};

	return (
		<Routes>
			{DefaultRoutes()}
			{RoutesFromJson({ urlData, componentMapping })}
		</Routes>
	);
};

export default AppRoutes;
