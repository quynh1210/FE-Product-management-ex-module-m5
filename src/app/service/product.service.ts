import {Injectable} from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'Rose',
    price: 2333,
    description: 'very beautiful'
  }, {
    id: 2,
    name: 'Pudding',
    price: 4523,
    description: 'delicious'
  }, {
    id: 3,
    name: 'ShanXue',
    price: 1000,
    description: 'expensive'
  }, {
    id: 1,
    name: 'Baby',
    price: 1242,
    description: 'very cute'
  }, {
    id: 2,
    name: 'cream',
    price: 123,
    description: 'very soft and smooth'
  }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  saveProduct(product: Product) {
    return this.products.push(product);
  }

  findById(id: number) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id: number, product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.products[i] = product;
      }
    }
  }
}
