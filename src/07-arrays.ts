(() => {
let prices = [1,2,3,4,5,6,7,'hola', true]
prices.push(234)

console.log(prices);

let products = ['hola', true]
products.push(false);

console.log(products);

let mixed: (number | string | boolean)[] = ['hola', true]
mixed.push(23);

console.log(mixed);

let numbers = [1,2,3,4,5,6,7]

numbers.map(item  => item * 2)

})();
