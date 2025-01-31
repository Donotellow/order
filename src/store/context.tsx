import { createContext, useState, ReactNode } from "react";

// Define the structure of a cart item
interface CartItem {
  title: string;
  price: number;
}

// Define valid action types
type CartAction = "add" | "remove";

// Define the context type
interface ContextType {
  cart: CartItem[];
  updateCart: (item: CartItem, action: CartAction) => void;
}

// Create the context with a default empty implementation
export const Context = createContext<ContextType>({
  cart: [],
  updateCart: () => {},
});

export function ContextProvider({ children }: { children: ReactNode }) {
  // State for managing the cart
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to update the cart (add/remove items)
  const updateCart = (item: CartItem, action: CartAction) => {
    if (action === "add") {
      setCart((prevCart) => [...prevCart, item]);
    } else if (action === "remove") {
      setCart((prevCart) => prevCart.filter((cartItem) => cartItem.title !== item.title));
    }
  };

  return (
    <Context.Provider value={{ cart, updateCart }}>
      {children}
    </Context.Provider>
  );
}


