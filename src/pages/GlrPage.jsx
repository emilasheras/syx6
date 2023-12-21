// import { useLayoutEffect } from "react";
import PageHeader from "../components/page-heading/Default";
// import syxlog from "../utils/syxlog";
const IMAGE_DATA_PATH = "/src/data/gallery-image-data.json";
import useFetchData from "../hooks/useFetchData";
import getLoadingJSX from "../components/loading-scaffold/getLoadingJSX";
// import React from "react";
import Post from "../components/post/Post";


export default function MainContent(){
	const { data:imageData, isLoading, error } = useFetchData(IMAGE_DATA_PATH);
	// syxlog.debug(imageData);
	
	// Vars
	const title = "Gallery";
	const extraMessage = "I tore myself away from the captivating embrace of heart, heavy with both wonder and trepidation. Art and emotion merged. Code dissolved into one enigmatic tapestry";
	const generalClasses = imageData?.generalClasses;
	
	// Early return if isLoading or error
	if(isLoading) return getLoadingJSX('text');
    if(error) return <p>Error: {error.message}</p>;

	return (
		<section className="s6-layout-fluid">
			<PageHeader title={title} extraMessage={extraMessage}/>
			<section>
				{/* <!-- in order: default, small, medium, large, extra-large --> */}
				<div className="gallery">
					{
						imageData?.images.map((img, index) => {		
							return <Post key={index} img={img} index={index} generalClasses={generalClasses} />
						})
					}
				</div>
			</section>
		</section>
    );
}