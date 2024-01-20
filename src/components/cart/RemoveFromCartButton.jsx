import PropTypes from "prop-types";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
const RemoveFromCartButton = ({ asset, defaultText = 'remove all' }) => {
	const { removeFromCart } = useContext(CartContext);
    return (
		<button
			className="s6-btn s6-btn-primary"
			onClick={() => removeFromCart(asset)}
		>
			{defaultText}
		</button>
	);
};
RemoveFromCartButton.propTypes = {
	asset: PropTypes.object.isRequired,
    defaultText: PropTypes.string,
};

export default RemoveFromCartButton;
