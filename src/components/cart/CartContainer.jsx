
import { useCart } from "../../contexts/CartContext";
import "./CartContainer.css"
import Item from "./Item";
import Summary from "./Summary";

const CartContainer = () => {
    const { cartItems, removeFromCart, addToCart, removeQuantity } = useCart();


    //  agregar item
    const handleAdd = (product) => {
        addToCart(product);
    };

    // Remover item del carrito

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    // retirar item cantidad

    const handleRemoveQuantity = (productId) => {
        removeQuantity(productId);
    };


    return (
        <div className="cart-wrapper">
            <h2 className="section-title">Carrito de compras</h2>
            <div className="cart-container">
                {cartItems && cartItems.length > 0 ? (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item) => (
                                <Item key={item.id}
                                    item={item}
                                    handleRemove={handleRemove}
                                    handleAdd={handleAdd}
                                    handleRemoveQuantity={handleRemoveQuantity} />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="no-item">
                        <p>Carrito de compras vacío</p>
                    </div>
                )}
                <Summary cartItems={cartItems} />
            </div>
        </div>
    );
};

export default CartContainer;