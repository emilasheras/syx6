import { useParams } from "react-router-dom";
import PageHeader from "../../components/page-heading/Default";
import Post from "../../components/post/Post";
import useFetchFirestore from "../../hooks/useFetchFirebase";
import getLoadingJSX from "../../components/loading-scaffold/getLoadingJSX";
import Details from "../../components/asset/Details";
import { AssetContext } from "../../contexts/AssetPageContext";
import CartSummary from "../../components/cart/CartSummary";

/**
 * 
 * @returns {JSX.Element} The AssetPage component
 */
function AssetPage() {
	const { id } = useParams();
	// const firebaseQuery = null;
	const params = { 
		collection: "assets",
		docIds: [id], 
	};
	const {
		data: querySnapshot,
		isLoading,
		error,
	} = useFetchFirestore(params);

	const assets = querySnapshot?.docs.map((doc) => {
		return {
			...doc.data(),
			id: doc.id,
		};
	});

	console.log(assets);
	
	// Vars
	const title = "Asset";
	const generalClasses = ["s6-post-image","s6-filter-brightness-75","rounded-3"];
	const asset = assets?assets[0]:null;

	if (isLoading) return getLoadingJSX("text");
	if (error) return <p className="s6-error-string">Error: {error.message}</p>;
	return (
		<section className="s6-layout-fluid">
			<AssetContext.Provider value={{ asset, generalClasses }}>
				<PageHeader title={title} extraMessage={asset.description} />
				<div className="s6-d-flex s6-gap-1">
					<section className="s6-media-inspector">
						<Post />
						<Details />
					</section>
					<CartSummary />
				</div>
			</AssetContext.Provider>
		</section>
	);
}

export default AssetPage;