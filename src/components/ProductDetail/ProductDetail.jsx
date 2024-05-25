
import "./ProductDetail.css";
import { FaStar } from "react-icons/fa";
import { MdAddShoppingCart, MdOutlineShoppingCartCheckout } from "react-icons/md";
import useGetProduct from "../../hooks/useGetProduct";
import { LuLoader } from "react-icons/lu";
import { useCart } from "../../contexts/CartContext";
import { motion } from "framer-motion";

const ProductDetail = () => {
    const { product, loading, error } = useGetProduct();
    const { addToCart } = useCart();

    const handleAdd = (product) => {
        addToCart(product);
    };

    if (loading) {
        return (
            <div className="loading-container">
                <span className="loading-text">Loading...</span>
                <LuLoader className="icon-loading" />
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return null;
    }

    return (
        <motion.div className="product-container"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}>
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-detail">
                <div className="product-category">{product.category}</div>
                <h1 className="product-title">{product.title}</h1>
                <div className="product-rating">
                    <div className="product-rating-start"><FaStar /></div>
                    <span>{product.rating?.rate}</span>
                    <span>{product.rating?.count} review</span>
                </div>
                <div className="product-description">{product.description}</div>
                <div className="product-price">S/{product.price}</div>

                <div className="product-buttons">
                    <div className="product-btn add-to-cart icon-slide-left" onClick={() => handleAdd(product)}>
                        <MdAddShoppingCart className="icon" />
                        <span>Add to cart</span>
                    </div>
                    <div className="product-btn buy-btn icon-slide-left">
                        <MdOutlineShoppingCartCheckout className="icon" />
                        <span>Buy now</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductDetail;
