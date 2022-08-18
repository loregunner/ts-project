export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  name: string;
  createdDate: Date;
  stock: number;
  size?: Sizes;
};
