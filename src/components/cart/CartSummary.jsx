// import React from 'react'
// import PropTypes from 'prop-types'

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import syxutils from "../../utils/syxutils";
import EmptyCart from "./EmptyCart";
import { Link } from "react-router-dom";
import ButtonGroup from "../wrapper-components/ButtonGroup";
import ClearCartButton from "./ClearCartButton";

const CartSummary = () => {
	const { cart } = useContext(CartContext);

	return (
		<div className="s6-cart-summary">
			<h3 className="s6-h3-bold">Cart Summary</h3>
			{syxutils.empty(cart.items) ? <EmptyCart /> : <SummarizedCartDetails cart={cart} />}
		</div>
	);
};

const SummarizedCartDetails = () => {
	const { itemsInCart, totalCart } = useContext(CartContext);
	
	// todo: finish implementation
	return (
		<>
			<p className="s6-p-bold">Total items: {itemsInCart()}</p>
			<p className="s6-p-bold">Total: {totalCart()}</p>
			{/* <p className="s6-p-bold">Subtotal: {cart.subtotal}</p> */}
			{/* <p className="s6-p-bold">Tax: {cart.tax}</p> */}
			{/* <p className="s6-p-bold">Discount: {cart.discount}</p> */}
			{/* <p className="s6-p-bold">Shipping: {cart.shipping}</p> */}
			{/* <p className="s6-p-bold">Estimated Delivery Date: {cart.deliveryDate}</p> */}
			{/* <p className="s6-p-bold">Promo Code: {cart.promoCode}</p> */}
			<ButtonGroup>
				<Link to="/checkout/cart" className="s6-btn s6-btn-primary">checkout</Link>
				<ClearCartButton/>
			</ButtonGroup>
			{/* Add more details here */}
		</>
	);
}


export default CartSummary;
