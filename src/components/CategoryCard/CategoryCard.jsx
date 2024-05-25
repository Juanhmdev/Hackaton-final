import { Link } from "react-router-dom";
import "./CategoryCard.css"

const CategoryCard = ({ category }) => {
    return (
        <Link to={`/category/${category}`}>
            <div className="category-card">
                <h4 className="category-name">{category}</h4>
            </div>
        </Link >
    );
};


export default CategoryCard;