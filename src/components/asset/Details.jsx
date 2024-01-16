// import PropTypes from "prop-types";

import { useContext } from "react";
import { AssetContext } from "../../contexts/AssetPageContext";
import SyxParagraph from "../paragraph/SyxParagraph";
import Rating from "./Rating";
import Price from "./Price";
import { CartContext } from "../../contexts/CartContext";

const Details = () => {
	const { asset } = useContext(AssetContext);
	const { addToCart, removeFromCart } = useContext(CartContext);

	return (
		<div className="s6-post-details">
			<SyxParagraph text={asset.status} />

			<h3 className="s6-h3-bold">{asset.title}</h3>

			<div className="s6-categories-container">
				{asset.categories.map((category, index) => {
					return (
						<div key={index} className="s6-pill">
							<SyxParagraph text={category} />
						</div>
					);
				})}
			</div>

			<div className="s6-post-description">
				<SyxParagraph text={asset.description} />
			</div>

			<Rating rating={asset.rating} />
			<Price price={asset.price} />

			<div className="s6-cart-options-container s6-gap-1 s6-m-top-2">
				<button className="s6-btn s6-btn-primary" onClick={() => addToCart(asset)}>
					add
				</button>
				<button className="s6-btn s6-btn-danger" onClick={() => removeFromCart(asset)}>
					remove all
				</button>
			</div>
		</div>
	);
};

export default Details;
