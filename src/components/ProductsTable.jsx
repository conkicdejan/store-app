import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function ProductsTable({ products, changeQty }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th width="100">Id</th>
            <th width="300">Name</th>
            <th width="100">Stock</th>
            <th width="200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name, stock }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{stock}</td>
              <td className="actions">
                <button onClick={() => changeQty(id, 1)}>add</button>
                <button onClick={() => changeQty(id, -1)}>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
