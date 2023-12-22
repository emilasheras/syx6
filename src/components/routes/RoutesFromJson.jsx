// import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import syxlog from "../../utils/syxlog";

function RoutesFromJson({ urlData, pageComponents }) {

    return urlData.map(({ name, abbreviation, subdirectory, path }, index) => {
		try {
			const PageComponent = pageComponents[abbreviation];
			// handle error
			if (!PageComponent) throw Error(`The [${abbreviation}] abbreviation index wasnt found inside the [pageComponents] object, but is defined in [s6-url-data.js]`);

			syxlog.debug(`[Call] RoutesFromJson() -> PageComponent: ${index + name}`);
			return (
				<Route
					key={index + name}
					path={subdirectory + path}
					element={<PageComponent />}
				/>
			);
		} catch (error) {
			syxlog.error(error);
			return <div>ERROR</div>; // Or some fallback UI
		}
	});
}
RoutesFromJson.propTypes = {
	urlData: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			abbreviation: PropTypes.string.isRequired,
			subdirectory: PropTypes.string.isRequired,
			path: PropTypes.string.isRequired,
		})
	).isRequired,
	pageComponents: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default RoutesFromJson;
