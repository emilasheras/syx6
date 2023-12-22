// import React from "react";
// import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";

function AssetPage() {
	const { id } = useParams();
	//todo: finish implementation of the detail view!
	return (
		<section>
			<div>AssetPage</div>
			<div>itemId: {id}</div>
		</section>
	);
}

// AssetPage.propTypes = {}

export default AssetPage;
