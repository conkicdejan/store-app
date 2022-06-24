class ProductService {
  constructor() {
    this.products = [
      { id: 1, name: "Bread", stock: 6 },
      { id: 2, name: "Milk", stock: 12 },
      { id: 3, name: "Meat", stock: 2 },
      { id: 4, name: "Oil", stock: 1 },
      { id: 5, name: "Salt", stock: 3 },
      { id: 6, name: "Sugar", stock: 0 },
    ];
  }

  getAll() {
    return [...this.products];
  }

  getById(id) {
    return this.products.find(({ id: prodId }) => prodId === id);
  }

  changeQty(id, newStock) {
    console.log(newStock);
    const index = this.products.findIndex(({ id: prodId }) => prodId === id);
    const newProducts = [...this.products];
    newProducts[index].stock = newStock;
    console.log(this.products);
    return true;
  }
}

export default new ProductService();
