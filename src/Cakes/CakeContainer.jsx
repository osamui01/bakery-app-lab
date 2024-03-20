import { useState } from "react";
import Cake from "./Cake";

const CakeContainer = () => {
  const [listOfCakes, setListOfCakes] = useState([
    // Victora Sponge
    {
      cakeName: "Victoria Sponge",
      ingredients: [
        "eggs",
        "butter",
        "sugar",
        "self-raising flour",
        "baking powder",
        "milk",
      ],
      price: 5,
      rating: 5,
    },

    // Tea Loaf
    {
      cakeName: "Tea Loaf",
      ingredients: [
        "eggs",
        "oil",
        "dried fruit",
        "sugar",
        "self-raising flour",
        "strong tea",
      ],
      price: 2,
      rating: 3,
    },

    // Carrot Cake
    {
      cakeName: "Carrot Cake",
      ingredients: [
        "carrots",
        "walnuts",
        "oil",
        "cream cheese",
        "flour",
        "sugar",
      ],
      price: 8,
      rating: 5,
    },
  ]);

  const list = listOfCakes.map((cake, index) => (
    <Cake key={index} cake={cake} />
  ));
  return (
    <>
      <section className="cake-list">{list}</section>
    </>
  );
};

export default CakeContainer;
