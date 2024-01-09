// import React from "react";
// import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import PageHeader from "../../components/page-heading/Default";
import Post from "../../components/post/Post";
import useFetchData from "../../hooks/useFetchData";
import getLoadingJSX from "../../components/loading-scaffold/getLoadingJSX";
import Details from "../../components/asset/Details";
import { AssetContext } from "../../context/AssetPageContext";
const IMAGE_DATA_PATH = "/public/gallery-image-data.json";

function AssetPage() {
	const { id } = useParams();
	const { data:imageData, isLoading, error } = useFetchData(IMAGE_DATA_PATH);
	
	// Early return if isLoading or error
	if(isLoading) return getLoadingJSX('text');
    if(error) return <p className="s6-error-string">Error: {error.message}</p>;

	// Vars
	const title = "Asset";
	// Get the first (and supposedly only one) image with the matching id
	const generalClasses = imageData?.generalClasses;
	const img = imageData?.images.filter((img) => img.id === id)[0];
	return (
		<section className="s6-layout-fluid">
			<AssetContext.Provider value={{img, generalClasses}}>
				<PageHeader title={title} extraMessage={img.description}/>
				<section className="s6-media-inspector">
					<Post/>
					<Details/>
				</section>
			</AssetContext.Provider>
		</section>
	);
}

// AssetPage.propTypes = {}

export default AssetPage;
