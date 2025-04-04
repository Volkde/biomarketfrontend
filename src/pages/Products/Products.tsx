import { Breadcrumbs } from "components/Breadcrumbs";
import React from "react";
import { styles } from "./styles";

const Products: React.FC = () => {
  return (
    <div style={styles.productsPage}>
      <Breadcrumbs />
      <h1 style={styles.h1}>Shop</h1>
    </div>
  );
};

export default Products;
