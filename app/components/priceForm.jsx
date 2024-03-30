"use client";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function PriceForm({ lng, setValue, nextStep }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cash");
  const [price, setPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("payment", selectedPaymentMethod);
    setValue("price", price);
    nextStep();
  };
  return (
    <div className="w-1/2 mx-auto">
      <h1 className=" text-center text-xl pb-4 font-semibold">price</h1>
      <div className="grid w-full  items-center gap-8 pt-4">
        <div className="flex items-center gap-2">
          <Input
            id="price"
            placeholder="Enter price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="w-full text-xl font-semibold flex justify-around items-center">
        paymentMethod
          <ToggleGroup className="flex gap-4 " type="single">
            <ToggleGroupItem
              className={`border  transition rounded-full ${
                selectedPaymentMethod === "cash"
                  ? "bg-zinc-800 dark:bg-zinc-600 text-white"
                  : ""
              }`}
              onClick={() => setSelectedPaymentMethod("cash")}
            >
            Cash
            </ToggleGroupItem>
            <ToggleGroupItem
              className={`border  transition rounded-full ${
                selectedPaymentMethod == "Installment"
                  ? "bg-zinc-800 dark:bg-zinc-600 text-white"
                  : ""
              }`}
              onClick={() => setSelectedPaymentMethod("Installment")}
            >
            installment
            </ToggleGroupItem>
            <ToggleGroupItem
              className={`border  transition rounded-full ${
                selectedPaymentMethod == "cash & Installment"
                  ? "bg-zinc-800 dark:bg-zinc-600 text-white"
                  : ""
              }`}
              onClick={() => setSelectedPaymentMethod("cash & Installment")}
            >
            cash & Installment
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <Button onClick={handleSubmit} type="button">
        Submit
        </Button>
      </div>
    </div>
  );
}
