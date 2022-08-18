(() =>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(title: string, createdDate: Date, stock: number, size: Sizes) {
    return {
      title,createdDate, stock, size
    }

  }
  const product1 = createProductToJson('P1', new Date(), 12, 'XL')
  console.log(product1);
  console.log(product1.createdDate);

  const createProductToJson2 = (title: string, createdDate: Date, stock: number, size?: Sizes) => {
    return {
      title,createdDate, stock, size
    }
  }

  const product2 = createProductToJson2('P2', new Date(), 22)
  console.log(product2);
  console.log(product2.size);
})();
