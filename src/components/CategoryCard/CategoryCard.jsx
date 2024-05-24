import "./CategoryCard.css"

const CategoryCard = ({ category }) => {
    return (<div className="category-card">
        <h4 className="category-name">{category}</h4>
    </div>
    );
};


export default CategoryCard;