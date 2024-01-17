// import React from 'react'
import PropTypes from "prop-types";
import PostBrille from "./PostBrille";
import useInView from "../../hooks/useInView";
import getLoadingJSX from "../loading-scaffold/getLoadingJSX";
import { useContext } from "react";
import { AssetContext } from "../../contexts/AssetPageContext";
import syxutils from "../../utils/syxutils";

const Post = ({
	index = 1,
	animateEntrance = false,
	onClick,
	isBrilleEnabled = false,
}) => {
	// Get the image data
	const { asset, generalClasses } = useContext(AssetContext);
	const FADE_IN_MS = 150;
	const [isInView, elementRef] = useInView({ threshold: 0 });
	const showPost = isInView || !animateEntrance;

	// Define classes
	let classes = generalClasses.join(" ");
	if (!syxutils.empty(asset.extraClasses))
		classes += " " + asset.extraClasses.join(" ");
	classes += " " + `s6-opacity-0 ${showPost ? "animate" : ""}`;
	const style = { "--item-index": index, "--fade-in-ms": FADE_IN_MS + "ms" };

	if (!showPost)
		return (
			<article ref={elementRef} key={index + asset.id}>
				{getLoadingJSX()}
			</article>
		);

	return (
		<article
			ref={elementRef}
			key={index + asset.id}
			style={style}
			className={classes}
			onClick={onClick}
		>
			<img alt={asset.alt} src={asset.path} />
			{isBrilleEnabled ? <PostBrille asset={asset} /> : null}
		</article>
	);
};

Post.propTypes = {
	index: PropTypes.number,
	animateEntrance: PropTypes.bool,
	onClick: PropTypes.func,
	isBrilleEnabled: PropTypes.bool,
};

export default Post;
