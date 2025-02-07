import poutine from "@/assets/poutine.jpg";
import cheeseburger from "@/assets/cheeseburger.jpg";
import fries from "@/assets/fries.jpg";
import wopper from "@/assets/wopper.jpg";
import chickenfries from "@/assets/chickenfries.jpg";
import chickennuggets from "@/assets/chickennuggets.jpg";
import margheritapizza from "@/assets/margheritapizza.jpg";
import pepperonipizza from "@/assets/pepperonipizza.jpg";
import breadsticks from "@/assets/breadsticks.jpg";

export const data = {
  "McDonald's": {
    items: [
      {
        image: poutine,
        title: "Poutine",
        description: "Fries, gravy, and cheese curds.",
        price: 6.99,
      },
      {
        image: cheeseburger,
        title: "Cheeseburger",
        description: "Classic beef patty with cheese, lettuce, and tomato.",
        price: 3.49,
      },
      {
        image: fries,
        title: "French Fries",
        description: "Crispy and golden fries, a perfect side dish.",
        price: 2.99,
      },
    ],
  },
  "Burger King": {
    items: [
      {
        image: wopper,
        title: "Whopper",
        description: "Grilled beef patty with lettuce, tomato, and mayo.",
        price: 5.79,
      },
      {
        image: chickenfries,
        title: "Chicken Fries",
        description: "Crispy chicken-shaped fries, perfect for dipping.",
        price: 4.29,
      },
      {
        image: chickennuggets,
        title: "Chicken Nuggets",
        description: "Crispy, golden chicken nuggets, served with sauce.",
        price: 3.99,
      },
    ],
  },
  "Pizza Hut": {
    items: [
      {
        image: margheritapizza,
        title: "Margherita Pizza",
        description: "Fresh mozzarella, basil, and a rich tomato sauce.",
        price: 12.99,
      },
      {
        image: pepperonipizza,
        title: "Pepperoni Pizza",
        description: "Topped with pepperoni and mozzarella cheese.",
        price: 14.99,
      },
      {
        image: breadsticks,
        title: "Breadsticks",
        description: "Garlic butter breadsticks, served with marinara sauce.",
        price: 5.99,
      },
    ],
  },
};