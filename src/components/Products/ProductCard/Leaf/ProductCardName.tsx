import { useContext } from "react";
import { ProductName } from "../ProductCard.styles";
import ProductCardContext from "../../context/ProductCardContext";

const ProductCardName: React.FC = () => {
  const product = useContext(ProductCardContext);
  return <ProductName>{product?.name}</ProductName>;
};

export default ProductCardName;
