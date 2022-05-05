import {Injectable} from '@angular/core';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [{
    id: 1,
    name: 'rose',
    price: 2400000,
    description: 'beautiful'
  }, {
    id: 2,
    name: 'socola',
    price: 230,
    description: 'delicious'
  }, {
    id: 3,
    name: 'shanxue',
    price: 3456,
    description: 'so sweet'
  }, {
    id: 4,
    name: 'baby doll',
    price: 7342,
    description: 'new'
  }, {
    id: 5,
    name: 'cake cacao',
    price: 1895,
    description: 'little bit'
  }];

  constructor() {
  }

  getAll() {
    return this.products;
  }

  saveProduct(product: Product) {
    this.products.push(product);
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

  deleteProduct(id: number) {
    this.products = this.products.filter(product => {
      return product.id !== id;
    });
  }
}
