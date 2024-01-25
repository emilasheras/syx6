import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext';
import RemoveFromCartButton from './RemoveFromCartButton';

const CartCheckoutOrder = () => {
    const { cart } = useContext(CartContext);
    console.log(cart);
    const title = "Order";

    return (
        <div className="s6-cart-order">
			<h3 className="s6-h3-bold">{title}</h3>
            
            {cart.items.map((item, index) => {
                return (
                    <div key={index} className="s6-cart-order-item">
                        <div className="s6-cart-order-item-image">
                            <img className="s6-asset-thumbnail" src={item.path} alt={item.name} />
                        </div>
                        <div className="s6-cart-order-item-details">
                            <div className="s6-cart-order-item-details-name">
                                {item.name}
                            </div>
                            <div className="s6-cart-order-item-details-price">
                                ${item.price}
                            </div>
                        </div>
                        <div className="s6-cart-order-item-options">
                            <RemoveFromCartButton asset={item} defaultText='x' />
                        </div>
                    </div>
                )
            })}

            <div className="s6-cart-order-total">
                <div className="s6-cart-order-total-label">
                    Total
                </div>
                <div className="s6-cart-order-total-value">
                    ${cart.total}
                </div>
            </div>
        </div>
    )
}

export default CartCheckoutOrder