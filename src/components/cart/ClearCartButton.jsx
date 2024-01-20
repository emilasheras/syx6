import PropTypes from "prop-types";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
const ClearCartButton = ({ defaultText = 'clear' }) => {
	const { clearCart } = useContext(CartContext);
    return (
		<button
			className="s6-btn s6-btn-primary"
			onClick={() => clearCart()}
		>
			{defaultText}
		</button>
	);
};
ClearCartButton.propTypes = {
    defaultText: PropTypes.string,
};

export default ClearCartButton;
