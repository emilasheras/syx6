import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function CartWidget(){    
    const { cart, itemsInCart } = useContext(CartContext);

    const cartIcons = {
        default: 'shopping_cart',
        hover: 'visibility',
        full: 'production_quantity_limits',
    };

    return(
        <>
        <div className="cart-container s6-cart-container">
            <div className="cart-icon s6-cart-icon-container">
                <span className="s6-v-align-middle material-symbols-outlined">{cartIcons.default}</span>
                <span className="badge">{cart.total}</span>
                <span className="badge">{itemsInCart()}</span>
            </div>
            <div className="cart-counter">
            </div>
        </div>
        </>
    )
}