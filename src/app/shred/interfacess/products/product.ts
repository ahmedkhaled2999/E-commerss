export interface Product {
  imageCover: string;
  price: number;
  ratingsAverage: number;
  title: string;
  description: string;
  id: string;
  category: Category;
  images: string[];
}
interface Category {
  _id: string;
  name: string;
}
