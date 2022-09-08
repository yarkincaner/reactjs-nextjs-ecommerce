export interface IProduct {
  id: string;
  image: any;
  name: string;
  slug: string;
  price: number;
  details: string;
}

export interface IBanner {
  id: string;
  image: any;
  buttonText: string;
  product: string;
  desc: string;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2: string;
  discount: string;
  saleTime: string;
}