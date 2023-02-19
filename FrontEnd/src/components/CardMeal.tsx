import React, { useEffect } from "react"
import { FoodCard } from "./FoodCard"


export function CardMeal() {

  return (
    <>
      <div className=" rounded-xl h-100 w-468 bg-gray-700 p-8">
        <div className="flex-row flex w-full justify-center items-center h-18 font-bold text-3xl ">
          <h1>MEAT PLAN</h1>{" "}
          <span className="ml-1.5 text-orange-500">| TODAY</span>
        </div>
        <div>
          <FoodCard title="Breakfast" subtitle="Overnight Oats" />
          <FoodCard title="Lunch" subtitle="Grilled Chicken Salad" />
          <FoodCard title="Snack" subtitle="Energy Balls" />
          <FoodCard title="Dinner" subtitle="Grilled Beef Salad" />
        </div>
      </div>
    </>
  )
}
