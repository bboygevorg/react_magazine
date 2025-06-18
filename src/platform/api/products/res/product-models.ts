export interface IProductModel {
  id: number;
  price: number;
  productName: string;
  description: string;
  imageURl: string;
  ingredients?: string;
  shelfLife?: string;
  favorite?: string;
  measurementEnumValue: number;
}
