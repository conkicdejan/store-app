import React, { useState } from "react";
import Product from "../components/ProductsTable";
import ProductService from "../services/ProductService";
import ProductsTable from "./../components/ProductsTable";
import ProductBuy from "./../components/ProductBuy";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

export default function AppProducts() {
  const [products, setProducts] = useState(ProductService.getAll());
  const [search, setSearch] = useState("");
  let match = useRouteMatch();

  const productsList = () =>
    products.filter((product) => product.name.toLowerCase().includes(search));

  const handleChangeQty = (id, step) => {
    const newProducts = [...products];
    const index = newProducts.findIndex(({ id: prodId }) => prodId === id);
    newProducts[index].stock = Math.max(newProducts[index].stock + step, 0);
    if (ProductService.changeQty(id, newProducts[index].stock)) {
      setProducts(newProducts);
    }
    console.log('object');
  };

  return (
    <div>
      <Switch>
      <Route exact path="/products">
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search..."
        />
        <button onClick={() => setSearch("")}>clear</button>
      </div>
      <div>
        <h3>Product list</h3>
        <ProductsTable products={productsList()} changeQty={handleChangeQty} />
      </div>
      </Route>
        <Route path={`${match.path}/:productId`}>
          <ProductBuy products={productsList()} changeQty={handleChangeQty}/>
        </Route>
      </Switch>
    </div>
  );
}
