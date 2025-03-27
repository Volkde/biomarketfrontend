import ProductList from "components/common/ProductList/ProductList";
import { StyledSection } from "./styles";
import { BestsellerProductsListProps } from "./types";

const BestsellerProductsList = ({ products }: BestsellerProductsListProps) => {
  return (
    <StyledSection>
      <ProductList products={[]} />
    </StyledSection>
  );
};

export default BestsellerProductsList;
