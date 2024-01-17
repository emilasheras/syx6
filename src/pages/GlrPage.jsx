import PageHeader from "../components/page-heading/Default";
import getLoadingJSX from "../components/loading-scaffold/getLoadingJSX";
import Post from "../components/post/Post";
import { useNavigate } from "react-router-dom";
import { AssetContext } from "../contexts/AssetPageContext";
import syxlog from "../utils/syxlog";
import PropTypes from "prop-types";
import { useContext } from "react";
import { GlrPageProvider, GlrPageContext } from "../contexts/GlrPageContext";

/**
 * 
 * @returns {JSX.Element} The GrlPage component
 */
export default function MainContent() {
	const title = "Gallery";
	const extraMessage = "I tore myself away from the captivating embrace of heart, heavy with both wonder and trepidation. Art and emotion merged. Code dissolved into one enigmatic tapestry";

	// Early return if isLoading or error
	return (
		<GlrPageProvider>
			<section className="s6-layout-fluid">
				<PageHeader title={title} extraMessage={extraMessage} />
				<CategoryFilter/>
				<PostGallery/>
			</section>
		</GlrPageProvider>
	);
}

const getFilteredAssets = (assets, selectedCategory) => {
	return assets?.filter(asset => asset.categories.includes(selectedCategory));
}
const PostGallery = () => {
	const navigate = useNavigate();
	const { assets, isLoading, error, generalClasses, selectedCategory, isFilterEnabled } = useContext(GlrPageContext);	
	const filteredAssets = isFilterEnabled ? getFilteredAssets(assets, selectedCategory) : assets;

	if (isLoading) return getLoadingJSX("text");
	if (error) return <p className="s6-error-string">Error: {error.message}</p>;
	return (
		<div className="gallery">
			{filteredAssets?.map((asset, index) => {
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
	);
}
PostGallery.propTypes = {
	assets: PropTypes.array,
	generalClasses: PropTypes.array,
}

const CategoryFilter = () => {
	// Vars // Hooks
	const selectName = "category-filter";
	const { assets, 
		isLoading, 
		error, 
		defaultFilterValue,
		selectedCategory, 
		setSelectedCategory
	} = useContext(GlrPageContext);
	const categories = getCategoriesArray(assets);

	// Event Handlers
	const handleCategoryChange = (htmlEvent) => {
		setSelectedCategory(htmlEvent.target.value);
	};

	// Early return if isLoading or error
	if (isLoading) return getLoadingJSX("text");
	if (error) return <p className="s6-error-string">Error: {error.message}</p>;
	return (
		<div className="s6-select-filter-container">
			<select name={selectName} value={selectedCategory} onChange={handleCategoryChange}>
				<option defaultValue={defaultFilterValue}>{defaultFilterValue}</option>
				{categories.map((category, index) => (
					<option key={index} value={category}>
						{category}
					</option>
				))}
			</select>
		</div>
	);
};
const getCategoriesArray = (assets) => {
	if(!assets || assets.length === 0) return [];
	let categories = [];
	assets.forEach((asset) => {
		asset.categories.forEach((category) => {
			if (!categories.includes(category)) categories.push(category);
		});
	});
	return categories;
};

CategoryFilter.propTypes = {
	assets: PropTypes.array,
}