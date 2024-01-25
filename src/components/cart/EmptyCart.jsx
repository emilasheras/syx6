import { Link } from "react-router-dom";
import SyxParagraph from "../paragraph/SyxParagraph";

const EmptyCart = () => {
    const defaultMessage = [
		"Your cart is empty.",
		"Consider viewing the assets available."
	];
	return (
		<div className="s6-empty-cart">
			<SyxParagraph
				className="s6-empty-cart-message"
				text={defaultMessage}
			/>
			<Link to="/pages/glr" className="s6-btn s6-btn-primary">Gallery</Link>
		</div>
	);
};

export default EmptyCart;
