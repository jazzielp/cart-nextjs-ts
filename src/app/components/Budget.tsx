"use client"
import React, { useState } from "react";
import { findBestCombination } from "@/utils/budget"
import { Product } from "../interfaces/interface";

export function Budget({ products, setBestCombination }: { products: Product[], setBestCombination: React.Dispatch<React.SetStateAction<Product[]>> }) {
  const [budget, setBudget] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^\d*$/)) {
      setBudget(e.target.value);
    }
  }

  const handleCalculate = () => {
    const bestCombination = findBestCombination(products, Number(budget));
    setBestCombination(bestCombination);
  }

  return (
    <div className="flex flex-row items-center gap-3 w-full max-w-xl">
      <p className="text-sm whitespace-nowrap">
        Calcula tu compra en base a tu presupuesto
      </p>
      <input
        type="text"
        name="budget"
        placeholder="$300"
        onChange={handleInputChange}
        value={budget}
        className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-800/70 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      />
      <button
        className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-500 active:bg-indigo-600/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition cursor-pointer"
        onClick={handleCalculate}
      >
        Calcular
      </button>
    </div>
  )
}