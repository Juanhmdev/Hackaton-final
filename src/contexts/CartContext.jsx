import { createContext, useContext, useEffect, useState } from "react"

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(
        JSON.parse(localStorage.getItem("cartItems")) || []
    );


    // Agregar al carrito según ejemplo
    const addToCart = (product) => {
        const existingItemIndex = cartItems.findIndex(
            (item) => item.id === product.id
        );

        product.quantity = product.quantity || 1;

        if (existingItemIndex !== -1) {
            const updateItems = [...cartItems];
            updateItems[existingItemIndex].quantity += 1;
            setCartItems(updateItems);
        } else {
            setCartItems([...cartItems, product]);
        }
    };

    // Remover item del carrito

    const removeQuantity = (productId) => {
        const existingItemIndex = cartItems.findIndex(
            (item) => item.id === productId
        );

        if (existingItemIndex !== -1) {
            const updateItems = [...cartItems];
            updateItems[existingItemIndex].quantity -= 1;
            if (updateItems[existingItemIndex].quantity === 0) {
                removeFromCart(productId);
            } else {
                setCartItems(updateItems);
            }
        }
    };

    // vacear carrito

    const clearCart = () => {
        setCartItems([])
    };

    // retirar item del carrito

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);