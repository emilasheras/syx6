// AppRoutes.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// ... other page imports
const IdxPageMain = React.lazy(() => import("/src/pages/IdxPage"));
const HmePageMain = React.lazy(() => import("/src/pages/HmePage"));
const GlrPageMain = React.lazy(() => import("/src/pages/GlrPage"));
const NxsPageMain = React.lazy(() => import("/src/pages/NxsPage"));
const ShpPageMain = React.lazy(() => import("/src/pages/ShpPage"));
const ClgPageMain = React.lazy(() => import("/src/pages/ClgPage"));
const AbtPageMain = React.lazy(() => import("/src/pages/AbtPage"));
import NotFoundPageMain from "/src/pages/NotFoundPage";
import urlData from "/src/data/s6-url-data";
// import getLoadingJSX from "/src/components/loading-scaffold/getLoadingJSX";
import syxlog from "/src/utils/syxlog";

const AppRoutes = () => {
    let location = useLocation();

	React.useEffect(() => {
		// Log the path to understand when re-renders occur
		syxlog.debug("Navigated to:", location.pathname);
	}, [location]);


    const pageComponents = {
		idx: IdxPageMain,
		hme: HmePageMain,
		glr: GlrPageMain,
		nxs: NxsPageMain,
		shp: ShpPageMain,
		clg: ClgPageMain,
		abt: AbtPageMain,
	};
	return (
		<Routes>
			<Route path="/" element={<IdxPageMain />} />
			{urlData.map(({ abbreviation, subdirectory, path }, index) => {
				try {
					const PageComponent = pageComponents[abbreviation];
					if (!PageComponent)
						throw Error(
							`The [${abbreviation}] abbreviation index wasnt found inside the [pageComponents] object, but is defined in [s6-url-data.js]`
						);
					return (
						<Route
							key={index+abbreviation}
							path={subdirectory + path}
							element={<PageComponent />}
						/>
					);
				} catch (error) {
                    syxlog.error(error);
                    return <div>ERROR</div>; // Or some fallback UI 
				}
			})}
			<Route path="*" element={<NotFoundPageMain />} />
		</Routes>
	);
};

export default AppRoutes;
