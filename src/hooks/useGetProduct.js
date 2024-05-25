
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const useGetProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  console.log(product);
  const getProduct = async () => {
    try {
        setLoading(true);
        const res = await fetch (`https://fakestoreapi.com/products/${id}`);

        if (res.ok) {
            const data = await res.json();
            setProduct(data);
            setLoading(false);
        }
    } catch (error) {
        console.error(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);
    return { product, loading };
};

export default useGetProduct;