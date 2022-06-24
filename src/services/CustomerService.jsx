class CustomerService {
  constructor() {
    this.customers = [
      { id: 1, firstName: "Dejan", lastName: "Conkic", latestPurchases: [1, 2, 3, 4] },
      { id: 2, firstName: "Petar", lastName: "Petrovic", latestPurchases: [1, 3]  },
      { id: 3, firstName: "Ivan", lastName: "Ivanovic", latestPurchases: []  },
    ];
  }

  getAll() {
    return this.customers;
  }

  getById(id) {
    return this.customers.find(({ id: custId }) => custId === id)
  }

  add(newCustomer) {
    this.customers.push(newCustomer);
  }

  remove(id) {
    this.customers = this.customers.filter(({ id: custId }) => custId !== id);
  }
}

export default new CustomerService();
