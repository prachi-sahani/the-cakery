import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Cake",
    image:"assets/category-cake.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Pastries and Cupcakes",
    image:"assets/category-cupcakes.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Brownies and Dry Cakes",
    image: "assets/category-brownies.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Jar Desserts",
    image:"assets/category-jar-cake.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Chocolates",
    image:"assets/category-chocolates.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Cookies",
    image: "assets/category-cookies.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Donuts",
    image:"assets/category-donuts.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Gift Hampers",
    image: "assets/category-gift-hampers.jpg"
  },
];
