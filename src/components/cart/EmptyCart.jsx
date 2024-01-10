import SyxParagraph from "../paragraph/SyxParagraph";

const EmptyCart = () => {
    const defaultMessage = "Your cart is empty.";
	return (
		<div className="s6-empty-cart">
			<SyxParagraph
				className="s6-empty-cart-message"
				text={defaultMessage}
			/>
		</div>
	);
};

export default EmptyCart;
