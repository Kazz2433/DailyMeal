import React, { useState } from "react"
import { FoodCard } from "./FoodCard"

type Props = {
  result: string[]
  handleButtonReset: () => void
}

export function MealCard({ result, handleButtonReset }: Props) {
  return (
    <>
      <div className=" rounded-xl h-full w-full tablet:min-w-max tablet:max-w-xl tablet:w-full bg-gray-700 px-8 py-12 justify-start  max-smart:px-[14px] max-smart:py-[32px]">
        <div className="flex-row flex w-full justify-center items-start h-14 font-bold text-3xl max-smart:text-xl">
          <h1>MEAT PLAN</h1>{" "}
          <span className="ml-1.5 text-orange-500">| TODAY</span>
        </div>
        <div className="flex flex-col gap-4 ">
          {result.map((meals, key) => {
            const resultUrl = meals[1]

            const handleClickGithub = () => {
              window.open(resultUrl, "_blank")
            }
            console.log(meals)
            return (
              <FoodCard
                key={key}
                title={meals[2]}
                subtitle={meals[0]}
                clickMeal={handleClickGithub}
              />
            )
          })}
        </div>
        {
          <button
            onClick={handleButtonReset}
            className=" bg-orange-500
            flex-row 
            flex 
            items-center justify-center 
            py-4 px-11 
            mt-24
            w-full
            rounded-lg 
            text-xl
            font-bold
            
            cursor-pointer
            transition-all
            duration-200
            ease-out
            hover:text-orange-500
            hover:bg-white
            hover:scale-105
          "
          >
            Reset
          </button>
        }
      </div>
    </>
  )
}
