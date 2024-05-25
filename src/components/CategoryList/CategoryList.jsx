import useGetCategories from "../../hooks/useGetCategories";
import CategoryCard from "../CategoryCard/CategoryCard"
import "./CategoryList.css"
import { motion } from "framer-motion";


const CategoryList = () => {
    const { categories, loading } = useGetCategories();
    console.log(categories);
    return (
        <motion.div className="category-list"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3 }}>
            {loading
                ? Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="category-card">
                        <h4 className="category-name">Loading...</h4>
                    </div>
                ))
                : categories.map((category) => (
                    <CategoryCard key={category} category={category} />
                ))}
        </motion.div>
    );
};

export default CategoryList;