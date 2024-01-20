import PropTypes from "prop-types";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
const AddToCartButton = ({ asset, defaultText = 'add' }) => {
	const { addToCart } = useContext(CartContext);
    return (
		<button
			className="s6-btn s6-btn-primary"
			onClick={() => addToCart(asset)}
		>
			{defaultText}
		</button>
	);
};
AddToCartButton.propTypes = {
	asset: PropTypes.object.isRequired,
    defaultText: PropTypes.string,
};

export default AddToCartButton;
