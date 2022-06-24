class CustomerService {
  constructor() {
    this.customers = [
      { id: 1, firstname: "Dejan", lastname: "Conkic" },
      { id: 2, firstname: "Petar", lastname: "Petrovic" },
      { id: 3, firstname: "Ivan", lastname: "Ivanovic" },
    ];
  }

  getAll() {
    return this.customers;
  }

  remove(id) {
    this.customers = this.customers.filter(({ id: custId }) => custId !== id);
  }
}

export default new CustomerService();
