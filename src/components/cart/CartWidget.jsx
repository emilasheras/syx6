import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export default function CartWidget(){
    console.log('CartWidget Rendered');
    
    const { cart, itemsInCart } = useContext(CartContext);

    const cartIcons = {
        default: 'shopping_cart',
        hover: 'visibility',
        full: 'production_quantity_limits',
    };

    return(
        <>
        <div className="cart-container">
            <div className="cart-icon">
                <span className="material-symbols-outlined">{cartIcons.default}</span>
                <span className="badge">{cart.total}</span>
                <span className="badge">{itemsInCart()}</span>
            </div>
            <div className="cart-counter">
            </div>
        </div>
        </>
    )
}