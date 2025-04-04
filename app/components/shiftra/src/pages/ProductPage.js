import { useLocation } from "react-router-dom";
import ProductDetails from "../components/ProductsPage/ProductDetails";
import RelatedItems from "../components/ProductsPage/RelatedItems";

export default function ProductPage() {
  const location = useLocation();
  const product = location.state?.product;
    return (
      <div className="max-w-7xl mx-auto p-6 mt-10">
        <div>
          <ProductDetails product={product} />
          <RelatedItems />  
        </div>
      </div>
    )
  }