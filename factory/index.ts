interface IProductFactory {
  createProductA(id: string, name: string, price: number): ProductA;
  createProductB(id: string, name: string, price: number): ProductB;
}

interface IProduct {
  id: string;
  name: string;
  price: number;
}

class ProductA implements IProduct {
  id: string;
  name: string;
  price: number;

  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class ProductFactory implements IProductFactory {
  createProductA(id: string, name: string, price: number) {
    return new ProductA(id, name, price);
  }
  createProductB(id: string, name: string, price: number) {
    return new ProductB(id, name, price);
  }
}

const productFactory = new ProductFactory();
const productA = productFactory.createProductA("1", "John", 1000);

// After that, if we want to add another type of product, we can add another method for creating product B

class ProductB implements IProduct {
  id: string;
  name: string;
  price: number;

  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

const productB = productFactory.createProductB("2", "Smith", 2000);

// By using this, we can easily to maintain and add more types of product if we want
// We can place all logic for creating product in to this factory method.
