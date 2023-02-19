import React from "react"

type Props = {
  title: string
  subtitle: string
}

export function FoodCard({ title, subtitle }: Props) {
  return (
    <>
      <div
        className="
        bg-background-900 
          flex 
          flex-row 
          items-center justify-center 
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
        <h1 className=" text-orange-500 font-bold">{title} |</h1>
        <span className="ml-1.5 font-normal"> {subtitle}</span>
      </div>
    </>
  )
}
