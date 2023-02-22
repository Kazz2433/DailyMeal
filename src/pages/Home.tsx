import { Request, Response } from 'express';
import { useState } from "react"
import { MealCard } from "../components/MealCard"
import Header from "../components/Header"
import { api } from "../lib/axios"
import { GithubButton } from "../components/GithubButton"

interface dataProp {
  title: string
  sourceUrl: string
  titleMeal: string[]
  index: number
}


export default function Home() {
  const [meals, setMeals] = useState([])

  async function handleButtonReq(_event: React.MouseEvent<HTMLButtonElement>) {
  try {
    const response = await api.get('/');
    const titleMeal = ['Breakfast', 'Lunch', 'Dinner'];    
    const data = response.data.meals.map((item: { title: string; sourceUrl: string; }, index: number) => [
      item.title,
      item.sourceUrl,
      titleMeal[index],
    ]);


    setMeals(data);
  } catch (error) {
    console.error(error);
  }
}
  function handleButtonReset() {
    setMeals([])
  }




  return (
    <view className="h-full w-screen px-10 flex flex-col tablet:px-40 max-smart:px-6 max-tablet:px-24 ">
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
          <MealCard handleButtonReset={handleButtonReset} result={meals} />
        </div>
      </div>
      <div className="tablet:hidden flex w-full my-12 ">
        <GithubButton />
      </div>
    </view>
  )
}
