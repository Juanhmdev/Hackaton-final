import CategoryList from "../components/CategoryList/CategoryList";
import { Portal } from "../components/Portal/Portal";
import ProductList from "../components/ProductList/ProductList";
import { ProductProvider } from "../contexts/ProductContext";
import { LuLoader } from "react-icons/lu";
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const loadData = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            setLoading(false);
        } catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

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

    return (
        <ProductProvider>
            <div className="portada">
                <Portal />
            </div>
            <div id="main-content" className="main-content">
                <div className="category">
                    <motion.h1 className="section-title"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3 }}>Categories</motion.h1>
                    <CategoryList />
                </div>

                <div className="products">
                    <motion.h1 className="section-title" initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3 }}>Products</motion.h1>
                    <ProductList />
                </div>
            </div>
            <footer className="footer-container">
                <h4>Hola mundo</h4>
            </footer>
        </ProductProvider>
    );
};

export default Home;