import React from "react";

import { Button } from "@/components/ui/button.tsx";



export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 flex w-full items-center justify-center bg-purple-400">
      <div className="flex max-w-7xl flex-1 items-center justify-between bg-lime-300">
        <div className="bg bg-red-400">
          <p className="text-neutral-50">
            <span className="text-l block italic">The</span>
            <span className="block text-center text-2xl">Order</span>
            <span className="text-l block text-right italic">App</span>
          </p>
        </div>
        <div className="bg bg-red-700">
          <Button>Your Order</Button>
        </div>
      </div>
    </nav>
  );
};
