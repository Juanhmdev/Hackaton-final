
import { TbSearch } from "react-icons/tb";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FcShop } from "react-icons/fc";
import "./Header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";


const Header = () => {
    const { cartItems } = useCart();
    return (
        <div className="header">
            <Link to="/">
                <div className="logo">
                    {" "}
                    <h2>MI TIENDA</h2>
                    <FcShop className="icon" />
                </div>
            </Link>

            <div className="rigth-side">
                <div className="search-input">
                    <input type="text" placeholder="Search" /> <TbSearch />
                </div>

                <Link to="/cart">
                    <div className="cart">
                        <HiMiniShoppingCart className="cart-icon" />
                        <span>{cartItems.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
