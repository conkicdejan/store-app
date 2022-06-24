import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductService from "../services/ProductService";
import CustomerService from "../services/CustomerService";

export default function ProductBuy({ products, changeQty}) {
  let { productId } = useParams();
  const [product, setProduct] = useState(products.find(({ id: prodId }) => prodId === +productId));
  const { id, name, stock } = product;
  const customers = CustomerService.getAll();
  const [idCustomerSelected, setIdCustomerSelected] = useState("");

  const handleBuy = () => {
    if (!idCustomerSelected) {
      return alert("Please select customer");
    }
    if (CustomerService.updatePurchases(+idCustomerSelected, +productId)){
        changeQty(productId, -1)
    }}
      

  return (
    <div>
      <h3>
        id: {id} <br />
        product name: {name} <br />
        in stock: {stock} <br />
      </h3>
      <select
        value={idCustomerSelected}
        onChange={(e) => setIdCustomerSelected(e.target.value)}
      >
        <option value="">--Select customer--</option>
        {customers.map(({ id, firstName, lastName }) => (
          <option key={id} value={id}>
            {firstName} {lastName}
          </option>
        ))}
      </select>
      <button onClick={handleBuy}>confirm</button>
      <button>cancel</button>
    </div>
  );
}
