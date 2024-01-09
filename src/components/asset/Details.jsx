// import PropTypes from "prop-types";

import { useContext } from "react";
import { AssetContext } from "../../context/AssetPageContext";
import SyxParagraph from "../paragraph/SyxParagraph";

const Details = () => {
	const { img } = useContext(AssetContext);

	return (
		<div className="s6-post-details">
			<h2 className="s6-h2-bold">{img.title}</h2>

			{/* todo: AssetRating */}

			<div className="s6-categories-container">
				{img.categories.map((category, index) => {
					return (
						<div key={index} className="s6-pill">
							{/* <p>{category}</p> */}
							<SyxParagraph text={category} />
						</div>
					);
				})}
			</div>

			<SyxParagraph text={img.status} />

			{/* todo: AssetPrice */}

			<SyxParagraph text={img.description} />
		</div>
	);
};

// Details.propTypes = {
//     img: PropTypes.object.isRequired,
// }

export default Details;
