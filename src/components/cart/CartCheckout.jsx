import CartCheckoutOrder from "./CartCheckoutOrder.jsx";
import CartCheckoutShipping from "./CartCheckoutShipping.jsx";
import CartCheckoutPayment from "./CartCheckoutPayment.jsx";
const CartCheckout = () => {
	return (
		<div className="s6-cart-checkout">
            <CartCheckoutOrder/>
            <CartCheckoutShipping/>
            <CartCheckoutPayment/>
        </div>
    );
};

export default CartCheckout;
