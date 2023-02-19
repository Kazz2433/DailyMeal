import React, { useState } from "react"
import { CardMeal } from "../components/CardMeal"
import Header from "../components/Header"
import axios from "axios"
import { api } from "../lib/axios"

export default function Home() {
  const [meals, setMeals] = useState([])

  async function handleButtonReq() {
    const response = await api.get("/ingridients")

    return console.log(response.data)
  }

  return (
    <view className="h-screen w-screen pb-12 px-10 flex flex-col tablet:px-40 max-smart:px-6 max-tablet:px-24 max-tablet:mb-[232px]">
      <Header />
      <div className=" flex-col flex h-full items-center gap-14 tablet:gap-24 tablet:flex-row">
        <div className="window:w-max w-full">
          <h1 className="w-full text-3xl tablet:text-5xl font-bold mb-7 tablet:text-left tablet:leading-tight text-center window:w-540">
            Want a tip on what to{" "}
            <span className="text-orange-500 ">eat today?</span>
          </h1>
          <button
            onClick={handleButtonReq}
            className=" rounded-xl px-10 py-3 bg-orange-500 h-16 w-full text-white font-bold hover:bg-white hover:text-orange-500 transition-all ease-in duration-200"
          >
            Genarete meal plan
          </button>
        </div>
        <div className="w-full flex items-end justify-end">
          <CardMeal />
        </div>
      </div>
    </view>
  )
}
