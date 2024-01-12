// import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import syxlog from "../../utils/syxlog";
import syxutils from "../../utils/syxutils";
import ProtectedRoute from "./ProtectedRoute";

/**
 * this is probably going to be a array flattening (map) function of sorts...,
 * regardless of route nesting, it will flatten the array to a single level of <Route> components
 */

/**
 * @description This function takes a `urlData` object and a `componentMapping` object and returns an array of <Route> components.
 * 
 * @param {String} urlData - The urlData object from the s6-url-data.js file (for now)
 * @param {Object} componentMapping - The component mapping object that defines a relationship 
 * between an url `name` and a component's (JSX) lazy loaded import.
 * 
 * @returns An array of <Route> components, e.g: [{...}, {...}, {...}]
 */
function RoutesFromJson({ urlData, componentMapping }) {

	return urlData.map(({ name, subdirectory, path, subRoutes, isAuthNeeded }, index) => {
		try {
			// get the component from the componentMapping object
			const PageComponent = componentMapping[name];

			// handle error
			if (!PageComponent) throw Error(`The [${name}] name index wasnt found inside the [componentMapping] object, but is defined in [s6-url-data.js]`);

			// Define and format a unique key for every Route.
			// Goes from: {i}/{subdirectory}/{name} to: {i}-{subdirectory}-{name}
			const uniqueKey = index+(subdirectory+name).replace(/\//g, '-');

			// Define the Parent Route component
			const parentRoute = (
				<Route
					key={uniqueKey}
					path={subdirectory + path}
					element={(isAuthNeeded) ? <ProtectedRoute><PageComponent/></ProtectedRoute> : <PageComponent/>}
				/>
			);

			// If child routes inside, recursive call to flatten the array
			if(!syxutils.empty(subRoutes)) {
				const childRoutes = RoutesFromJson({urlData: subRoutes, componentMapping});
				return [parentRoute,...childRoutes];
			}
			return parentRoute;
		} catch (error) {
			syxlog.error(error);
			return <></>; // has to return strictly a <Route> component or <React.Fragment>
		}
	});
}

RoutesFromJson.propTypes = {
	urlData: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			// abbreviation: PropTypes.string.isRequired,
			subdirectory: PropTypes.string.isRequired,
			path: PropTypes.string.isRequired,
			isAuthNeeded: PropTypes.bool.isRequired, // Added isAuthNeeded prop type
		})
	).isRequired,
	componentMapping: PropTypes.objectOf(PropTypes.func).isRequired,
};

// const ConditionalProtectedRoute = ({ isAuthNeeded, PageComponent }) => {
// 	if (isAuthNeeded) return <ProtectedRoute isAuthNeeded={isAuthNeeded}><PageComponent /></ProtectedRoute>;
// 	return <PageComponent />;
// };



export default RoutesFromJson;
