import React from "react";
import { useFilterContext } from "../../context/filter_context";
import GridView from "../GridView/GridView.jsx";
import ListView from "../ListView/ListView.jsx";

const ProductList = () => {
  const { filterProducts, gridView } = useFilterContext();
  if (filterProducts.length < 1) return <h4>No item match your search...</h4>;

  if (!gridView) {
    return <ListView filterProducts={filterProducts}></ListView>;
  }

  return <GridView filterProducts={filterProducts}></GridView>;
};

export default ProductList;
