import React, { useState } from "react";
import Product from "../components/ProductsTable";
import ProductService from "../services/ProductService";
import ProductsTable from './../components/ProductsTable';

export default function AppProducts() {
  const [products, setProducts] = useState(ProductService.getAll());

  return (
    <div>
      <h3>Product list</h3>
      <ProductsTable products={products} />
    </div>
  );
}
