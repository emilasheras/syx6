
export default function CartWidget(){
    console.log('CartWidget Rendered');

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
                <span className="badge">0</span>
            </div>
            <div className="cart-counter">
            </div>
        </div>
        </>
    )
}