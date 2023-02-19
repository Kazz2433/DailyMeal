import React, { useEffect } from "react"
import { FoodCard } from "./FoodCard"

export function CardMeal() {
  return (
    <>
      <div className=" rounded-xl h-full w-full tablet:min-w-max tablet:max-w-xl tablet:w-full bg-gray-700 px-8 py-12 justify-start  max-smart:px-[14px] max-smart:py-[32px]">
        <div className="flex-row flex w-full justify-center items-start h-14 font-bold text-3xl max-smart:text-xl">
          <h1>MEAT PLAN</h1>{" "}
          <span className="ml-1.5 text-orange-500">| TODAY</span>
        </div>
        <div className="flex flex-col gap-4 ">
          <FoodCard title="Breakfast" subtitle="Overnight Oats" />
          <FoodCard title="Lunch" subtitle="Grilled Chicken Salad" />
          <FoodCard title="Snack" subtitle="Energy Balls" />
          <FoodCard title="Dinner" subtitle="Grilled Beef Salad" />
        </div>
        <button
          className=" bg-orange-500
          flex 
          flex-row 
          items-center justify-center 
          py-4 px-11 
          mt-24
          w-full
          rounded-lg 
          text-xl

          cursor-pointer
          transition-all
          duration-200
          ease-out
          hover:opacity-80
          hover:scale-105
          "
        >
          Reset
        </button>
      </div>
    </>
  )
}
