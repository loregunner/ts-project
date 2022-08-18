(() => {
  const login = (data: {email: string, password: number}) => {
  console.log(data.email,data.password);

  }
  login({email: 'lorena.rippe94@gamil.com', password: 123445})

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string, createdDate: Date, stock: number, size?: Sizes
  }) => {
products.push(data)
  }
  addProduct({
    title: 'PRODC1',
    createdDate: new Date(1992, 2, 1),
    stock: 12,
    size: 'XL'
  });
  console.log(products);

})();
