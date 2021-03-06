import React, { useState } from "react";
import CustomerService from "../services/CustomerService";
import Customer from "./../components/Customer";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import LatestPurchases from "../components/LatestPurchases";

export default function AppCustomers() {
  const [customers, setCustomers] = useState(CustomerService.getAll());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  let match = useRouteMatch();

  const fullname = (customer) => `${customer.firstName} ${customer.lastName}`;

  const handleRemove = (id) => {
    const newCustomers = customers.filter(({ id: custId }) => custId !== id);
    setCustomers(newCustomers);
    CustomerService.remove(id);
  };

  const addCustomer = (e) => {
    e.preventDefault();
    const newId = Math.max(...customers.map(({ id }) => id)) + 1;
    const newCustomer = { id: newId, firstName, lastName };
    setCustomers([newCustomer, ...customers]);
    CustomerService.add(newCustomer);
  };

  return (
    <div>
      <Switch>
        <Route exact path="/customers">
          <form onSubmit={addCustomer}>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="first name"
            />
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="last name"
            />
            <button>Add customer</button>
          </form>
          <div>
            {customers.map((customer) => (
                <Customer
                  key={customer.id}
                  id={customer.id}
                  fullname={fullname(customer)}
                  remove={handleRemove}
                />
            ))}
          </div>
        </Route>
        <Route path={`${match.path}/:customerId`}>
          <LatestPurchases />
        </Route>
      </Switch>
    </div>
  );
}
