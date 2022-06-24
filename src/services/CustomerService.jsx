class CustomerService {
  constructor() {
    this.customers = [
      { id: 1, firstName: "Dejan", lastName: "Conkic" },
      { id: 2, firstName: "Petar", lastName: "Petrovic" },
      { id: 3, firstName: "Ivan", lastName: "Ivanovic" },
    ];
  }

  getAll() {
    return this.customers;
  }

  add(newCustomer) {
    this.customers.push(newCustomer);
  }

  remove(id) {
    this.customers = this.customers.filter(({ id: custId }) => custId !== id);
  }
}

export default new CustomerService();
