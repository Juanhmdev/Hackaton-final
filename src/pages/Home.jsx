import CategoryList from "../components/CategoryList/CategoryList";
import { Portal } from "../components/Portal/Portal";
import ProductList from "../components/ProductList/ProductList";
import { ProductProvider } from "../contexts/ProductContext";

const Home = () => {

    return (

        <ProductProvider>
            <div className="Portada">
                <Portal />
            </div>
            <div id="main-content" className="main-content">
                <div className="category">
                    <h1 className="section-title">Categories</h1>
                    <CategoryList />
                </div>

                <div className="products">
                    <h1 className="section-title">Products</h1>
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