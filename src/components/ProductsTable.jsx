import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function ProductsTable({ products }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th width="100">Id</th>
            <th width="300">Name</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, name }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
