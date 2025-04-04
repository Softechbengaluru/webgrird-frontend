import { useEffect} from "react";
import { getProducts } from "../utils/api";

const BestSellersApi = ({setProducts}) => {

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      if (!data) return;
      const formattedProducts = data.data
        .filter((product) => product.promotion_type === "best_seller")
        .map((product) => ({
          id: product.id,
          documentId: product.documentId,
          name: product.name,
          price: product.price,
          promotionType: product.promotion_type,
          image: product.image || [],
        }));
      setProducts(formattedProducts);
    };
    fetchProducts();
  }, [setProducts]);

  return null
};

const RelatedItemsApi = ({setProducts}) => {

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      if (!data) return;
      const formattedProducts = data.data
        .map((product) => ({
          id: product.id,
          documentId: product.documentId,
          name: product.name,
          price: product.price,
          promotionType: product.promotion_type,
          image: product.image || [],
        }));
      setProducts(formattedProducts);
    };
    fetchProducts();
  }, [setProducts]);

  return null
};

const TodaysDealsApi = ({ setProducts }) => {
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      
      if (!data) return;
      const formattedProducts = data.data
        .filter((product) => product.promotion_type === "todays_deals")
        .map((product) => ({
          id: product.id,
          documentId: product.documentId
            ? product.documentId
            : product.id,
          name: product.name,
          price: product.price,
          promotionType: product.promotion_type,
          image: product.image || [],
        }));
      setProducts(formattedProducts);
    };
    fetchProducts();
  }, [setProducts]);

  return null;
};

export {BestSellersApi, RelatedItemsApi ,TodaysDealsApi};