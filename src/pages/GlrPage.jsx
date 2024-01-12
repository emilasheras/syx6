import PageHeader from "../components/page-heading/Default";
import useFetchData from "../hooks/useFetchData";
import getLoadingJSX from "../components/loading-scaffold/getLoadingJSX";
import Post from "../components/post/Post";
import syxlog from '../utils/syxlog';
import { useNavigate } from 'react-router-dom';
import { AssetContext } from "../contexts/AssetPageContext";

const IMAGE_DATA_PATH = "/public/gallery-image-data.json";

export default function MainContent(){
	const { data:imageData, isLoading, error } = useFetchData(IMAGE_DATA_PATH);
    const navigate = useNavigate();
	
	// Vars
	const title = "Gallery";
	const extraMessage = "I tore myself away from the captivating embrace of heart, heavy with both wonder and trepidation. Art and emotion merged. Code dissolved into one enigmatic tapestry";
	const generalClasses = imageData?.generalClasses;

	// Early return if isLoading or error
	if(isLoading) return getLoadingJSX('text');
	if(error) return <p className="s6-error-string">Error: {error.message}</p>;

	return (
		<section className="s6-layout-fluid">
			<PageHeader title={title} extraMessage={extraMessage}/>
			<section>
				{/* <!-- in order: default, small, medium, large, extra-large --> */}
				<div className="gallery">
					{
						imageData?.images.map((img, index) => {		
							//* Click handler (for gallery images only)
							const navigateToAssetPage = () => {
								navigate(`/pages/glr/asset/${img.id}`);
							}

							return (
								<AssetContext.Provider value={{img, generalClasses}} key={index}>
									<Post 
										index={index}
										animateEntrance={true} 
										onClick={navigateToAssetPage}
										isBrilleEnabled={true}
									/>
								</AssetContext.Provider>
							)
						})
					}
				</div>
			</section>
		</section>
    );
}