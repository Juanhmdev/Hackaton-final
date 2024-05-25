import { createContext, useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Creación del contexto
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { category } = useParams();

    const getProducts = async (category) => {
        try {
            setLoading(true);
            let url = 'https://fakestoreapi.com/products';
            if (category) {
                url += `/category/${category}/?limit=4`;
            } else {
                url += "?limit=4";
            }
            const res = await fetch(url);
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
            } else {
                console.error('Error fetching data:', res.statusText);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts(category);
    }, [category]);

    return (
        <ProductContext.Provider value={{ products, loading }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);