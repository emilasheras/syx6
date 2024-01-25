import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { FlashPipelineContext } from "./FlashPipelineContext";
import syxutils from "../utils/syxutils";

export const CartContext = createContext();

const initialCart = {
	items: [],
	total: 0
};

export const CartProvider = ({ children }) => {
	const {setFlash} = useContext(FlashPipelineContext);
	const [cart, setCart] = useState(initialCart);

	const addToCart = (item) => {		
		const updatedItems = [...cart.items, item];
		const updatedTotal = calculateTotal(updatedItems);
		setCart({ ...cart, items: updatedItems, total: updatedTotal });
		setFlash(`Added ${item.name}`);
		setFlash(`New total $${updatedTotal}`)
	};

	const calculateTotal = (items) => {
		// Perform the calculation logic here
		let total = 0;
		for (const item of items) {
			total += item.price;
		}
		return total;
	};

	// removes ALL of the instance of an item
	const removeFromCart = (item) => {
		if(!isInCart(item)){
			setFlash(`No ${item.name} in cart remove`);
			return;
		}
		setCart({ ...cart, items: cart.items.filter((cartItem) => cartItem.id !== item.id) });
		setFlash(`Removed ${item.name}`);
	};
	
	const isInCart = (item) => {
		return cart.items.some((cartItem) => cartItem.id === item.id);
	};

	const clearCart = () => {
		setCart(initialCart);
		setFlash("Cart cleared");
	};

	const itemsInCart = () => {
		return cart.items.length;
	};

	const totalCart = () => {
		return cart.total;
	};

	const isCartEmpty = () => {
		return syxutils.empty(cart.items);
	};

	//* Value passed down to the consuming components via the Provider component
	const cartContextValue = {
		cart,
		addToCart,
		removeFromCart,
		isInCart,
		clearCart,
		itemsInCart,
		totalCart,
		isCartEmpty,
		//... other variables here
	};

	return (
		<CartContext.Provider value={cartContextValue}>
			{children}
		</CartContext.Provider>
	);
};

CartProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
