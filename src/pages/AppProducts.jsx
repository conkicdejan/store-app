import React, { useState } from "react";
import Product from "../components/ProductsTable";
import ProductService from "../services/ProductService";
import ProductsTable from "./../components/ProductsTable";

export default function AppProducts() {
  const [products, setProducts] = useState(ProductService.getAll());
  const [search, setSearch] = useState("");

  const productsList = () =>
    products.filter((product) => product.name.toLowerCase().includes(search));

  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search..."
        />
        <button onClick={() => setSearch('')}>clear</button>
      </div>
      <div>
        <h3>Product list</h3>
        <ProductsTable products={productsList()} />
      </div>
    </div>
  );
}
