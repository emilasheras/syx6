import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import PageHeader from "../../components/page-heading/Default";
import CartCheckout from "../../components/cart/CartCheckout.jsx";
import EmptyCart from "../../components/cart/EmptyCart.jsx";

const CartPageMain = () => {
    const { cart, isCartEmpty } = useContext(CartContext);
    
    const title = "Cart";
    const description = `${cart.items.length} items`;

    return (
		<section className="s6-layout-fluid">
            <PageHeader title={title} extraMessage={description} />
            {
                isCartEmpty() ? <EmptyCart /> : <CartCheckout />
            }
		</section>
    );
};
export default CartPageMain;