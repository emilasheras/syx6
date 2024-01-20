// import PropTypes from "prop-types";

import { useContext } from "react";
import { AssetContext } from "../../contexts/AssetPageContext";
import SyxParagraph from "../paragraph/SyxParagraph";
import Rating from "./Rating";
import Price from "./Price";
import AddToCartButton from "../cart/AddToCartButton";
import RemoveFromCartButton from "../cart/RemoveFromCartButton";
import ButtonGroup from "../wrapper-components/ButtonGroup";

const Details = () => {
	const { asset } = useContext(AssetContext);

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

			<div className="s6-post-description"><SyxParagraph text={asset.description} /></div>
			<Rating rating={asset.rating} />
			<Price price={asset.price} />
			
			<ButtonGroup>
				<AddToCartButton asset={asset} />
				<RemoveFromCartButton asset={asset} />
			</ButtonGroup>
		</div>
	);
};

export default Details;
