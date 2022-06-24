import React, { useState } from "react";
import CustomerService from "../services/CustomerService";
import Customer from './../components/Customer';

export default function AppCustomers() {
  const [customers, setCustomers] = useState(CustomerService.getAll());

  const fullname = (customer) => `${customer.firstname} ${customer.lastname}`

  const handleRemove = (id) => {
    const newCustomers = customers.filter(({id: custId}) => custId !== id)
    setCustomers(newCustomers);
    CustomerService.remove(id)
  }

  return (
    <div>
      {customers.map((customer) => (
        <Customer key={customer.id} id={customer.id} fullname={fullname(customer)} remove={handleRemove} />
      ))}
    </div>
  );
}
