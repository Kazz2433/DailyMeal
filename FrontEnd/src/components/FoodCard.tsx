import React from "react"

type Props = {
  title: string
  subtitle: string
  clickMeal: () => void
}
export function FoodCard({ title, subtitle, clickMeal, ...rest }: Props) {
  return (
    <>
      <div
        onClick={clickMeal}
        className="
        bg-background-900 
          flex 
          flex-col
          items-start justify-start 
          py-4 px-11 
          rounded-lg 
          text-xl
          max-smart:text-[4vw]
          max-smart:px-6
          max-smart:py-6


          cursor-pointer
          transition-all
          duration-200
          ease-out
          hover:opacity-80
          hover:scale-105
          "
      >
        <h1 className=" text-orange-500 font-bold">{title}</h1>
        <span className="window:w-468 font-normal w-full leading-relaxed">
          {subtitle}
        </span>
      </div>
    </>
  )
}
