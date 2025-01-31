import { Button } from "@/components/ui/button.tsx";
import { useContext } from "react";
import { Context } from "@/store/context.tsx";

export const Navbar: React.FC = () => {
  const ctx = useContext(Context);
  const cartLength = ctx.cart.length;
  return (
    <div className="flex justify-between items-center">
      <div className="m-1 rounded-md bg-neutral-900">
        <p className="text-neutral-50">
          <span className="text-l block italic">The</span>
          <span className="block text-center text-2xl">Order</span>
          <span className="text-l block text-right italic">App</span>
        </p>
      </div>

      <Button>
        <div className="rounded-full bg-neutral-50 p-1 text-neutral-900">
          {cartLength}
        </div>
        Your Order
      </Button>
    </div>
  );
};
