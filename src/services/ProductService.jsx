class ProductService {
  constructor() {
    this.products = [
      { id: 1, name: "Bread"},
      { id: 2, name: "Milk"},
      { id: 3, name: "Meat"},
      { id: 4, name: "Oil"},
      { id: 5, name: "Salt"},
      { id: 6, name: "Sugar"},
    ];
  }

  getAll() {
    return this.products;
  }

  getById(id) {
    return this.products.find(({ id: prodId }) => prodId === id)
  }

}

export default new ProductService();
