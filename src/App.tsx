import { data } from "@/data.ts";
import { Context} from "@/store/context.tsx";
import { useContext } from "react";
import { Nav } from "@/components/ui/nav.tsx";
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

function App() {
  const ctx = useContext(Context);
  return (
    <div className="flex w-full justify-center">
      <div className="flex max-w-7xl flex-1 flex-col">
        <Nav />
        <Accordion type="single" collapsible className="w-full">
          {Object.entries(data).map(([brand, menu]) => (
            <AccordionItem value={brand} key={brand}>
              <AccordionTrigger>{brand}</AccordionTrigger>
              <AccordionContent className="flex flex-wrap justify-center gap-2">
                {menu.items.map((item, index) => (
                  <Card
                    className="m-4 flex flex-col justify-between md:w-1/4"
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
  );
}

export default App;
