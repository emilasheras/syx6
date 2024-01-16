import PageHeader from "../components/page-heading/Default";
import getLoadingJSX from "../components/loading-scaffold/getLoadingJSX";
import Post from "../components/post/Post";
import { useNavigate } from "react-router-dom";
import { AssetContext } from "../contexts/AssetPageContext";
import useFetchFirestore from "../hooks/useFetchFirebase";

/**
 * 
 * @returns {JSX.Element} The GrlPage component
 */
export default function MainContent() {
	const {
		data: querySnapshot,
		isLoading,
		error,
	} = useFetchFirestore({ collection: "assets" }); //todo: add query for id?
	const navigate = useNavigate();

	// Vars
	const assets = querySnapshot?.docs.map((doc) => {
		return {
			...doc.data(),
			id: doc.id,
		};
	});

	const title = "Gallery";
	const extraMessage = "I tore myself away from the captivating embrace of heart, heavy with both wonder and trepidation. Art and emotion merged. Code dissolved into one enigmatic tapestry";
	const generalClasses = ["s6-post-image","s6-filter-brightness-75","rounded-3"];

	// Early return if isLoading or error
	if (isLoading) return getLoadingJSX("text");
	if (error) return <p className="s6-error-string">Error: {error.message}</p>;
	return (
		<section className="s6-layout-fluid">
			<PageHeader title={title} extraMessage={extraMessage} />
			<section>
				{/* <!-- in order: default, small, medium, large, extra-large --> */}
				<div className="gallery">
					{assets?.map((asset, index) => {
						return (
							<AssetContext.Provider
								value={{ asset, generalClasses }}
								key={index}
							>
								<Post
									index={index}
									animateEntrance={true}
									onClick={() => {navigate(`/pages/glr/asset/${asset.id}`)}}
									isBrilleEnabled={true}
								/>
							</AssetContext.Provider>
						);
					})}
				</div>
			</section>
		</section>
	);
}
