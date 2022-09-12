export interface IProduct {
  _id: string;
  image: any;
  name: string;
  slug: {
    current: string;
  };
  price: number;
  quantity: number;
  details: string;
}

export interface IBanner {
  _id: string;
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