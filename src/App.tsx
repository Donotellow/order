import { Context, ContextProvider } from "@/store/context.tsx";
import { useContext } from "react";
import { Navbar } from "./components/ui/navbar.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  /*CardContent,*/
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import poutine from "@/assets/poutine.jpg";
import cheeseburger from "@/assets/cheeseburger.jpg";
import fries from "@/assets/fries.jpg";
import wopper from "@/assets/wopper.jpg";
import chickenfries from "@/assets/chickenfries.jpg";
import chickennuggets from "@/assets/chickennuggets.jpg";
import margheritapizza from "@/assets/margheritapizza.jpg";
import pepperonipizza from "@/assets/pepperonipizza.jpg";
import breadsticks from "@/assets/breadsticks.jpg";

const data = {
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

function App() {
  const ctx = useContext(Context);
  return (
    <ContextProvider>
      <div className="flex w-full justify-center">
        <div className="flex max-w-7xl flex-1 flex-col">
          <Navbar />
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(data).map(([brand, menu]) => (
              <AccordionItem value={brand} key={brand}>
                <AccordionTrigger>{brand}</AccordionTrigger>
                <AccordionContent className="flex flex-wrap justify-center gap-2">
                  {menu.items.map((item, index) => (
                    <Card
                      className="flex m-4 flex-col justify-between md:w-1/4"
                      key={index}
                    >
                      <CardHeader>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="rounded-md"
                        />
                        
                          <CardTitle>{item.title}</CardTitle>
                          <p className="text-lg font-semibold text-green-600">
                            ${item.price}
                          </p>
                        
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button
                          onClick={() => {
                            ctx.updateCart(
                              {
                                title: item.title,
                                price: item.price,
                              },
                              "add",
                            );
                          }}
                        >
                          + Add
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
