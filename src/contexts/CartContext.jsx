import { createContext, useState } from "react";
import PropTypes from "prop-types";
import syxlog from "../utils/syxlog";

export const CartContext = createContext();

const initialCart = {
	items: [],
	total: 0
};

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(initialCart);
	syxlog.debug("Initial cart state: ", cart);

	const addToCart = (item) => {
		syxlog.debug("Adding to cart: ", item);
		const updatedItems = [...cart.items, item];
		const updatedTotal = calculateTotal(updatedItems);
		setCart({ ...cart, items: updatedItems, total: updatedTotal });
	};

	const calculateTotal = (items) => {
		// Perform the calculation logic here
		let total = 0;
		for (const item of items) {
			total += item.price;
		}
		return total;
	};

	const removeFromCart = (item) => {
		setCart({ ...cart, items: cart.items.filter((cartItem) => cartItem.id !== item.id) });
	};

	const isInCart = (item) => {
		return cart.items.some((cartItem) => cartItem.id === item.id);
	};

	const clearCart = () => {
		setCart(initialCart);
	};

	const itemsInCart = () => {
		return cart.items.length;
	};

	const totalCart = () => {
		return cart.total;
	};

	const removeItem = (itemId) => {
		setCart({ ...cart, items: cart.items.filter((cartItem) => cartItem.id !== itemId) });
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
		removeItem,

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
