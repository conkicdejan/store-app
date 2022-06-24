import React from "react";
import { useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";

export default function LatestPurchases() {
  let { customerId } = useParams();
  const customer = CustomerService.getById(+customerId);
  const { firstName, lastName, latestPurchases } = customer;

  return (
    <div>
      <h3>{firstName} {lastName}</h3>
      <ul>
        {latestPurchases.map((itemId) => (
          <li key={itemId}>{itemId}</li>
        ))}
      </ul>
    </div>
  );
}
