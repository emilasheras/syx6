// import React from "react";
// import PropTypes from 'prop-types'
import { useParams } from "react-router-dom";
import PageHeader from "../../components/page-heading/Default";
import Post from "../../components/post/Post";
import useFetchData from "../../hooks/useFetchData";
import getLoadingJSX from "../../components/loading-scaffold/getLoadingJSX";
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
	const img = imageData?.images.filter((img) => img.id === id)[0];
	return (
		<section className="s6-layout-fluid">
			<PageHeader title={title} extraMessage={img.description}/>
			<section className="s6-media-inspector">
				<Post img={img} generalClasses={imageData?.generalClasses}/>
			</section>
		</section>
	);
}

// AssetPage.propTypes = {}

export default AssetPage;
