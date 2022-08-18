import { addProduct, calcStock, products } from './product.service';

addProduct({
  name: 'PRODC1',
  createdDate: new Date(1992, 2, 1),
  stock: 5,
  size: 'XL',
});


addProduct({
  name: 'PRODC2',
  createdDate: new Date(1993, 2, 1),
  stock: 9,
  size: 'XL',
});

console.log(products);
const total = calcStock();
console.log(total);
