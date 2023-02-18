import React from "react"
import { NavLink } from "react-router-dom"
import { CardMeal } from "../components/CardMeal"
import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-20 flex-row flex justify-between h-100 items-center">
        <div className="max-w-fit">
          <h1 className="max-w-fit text-6xl font-bold mb-7 leading-20">
            Want a tip on what to <br />
            <span className="text-orange-500 ">eat today?</span>
          </h1>
          <NavLink to="/mealplan" title="Meal Plan">
            <button className=" rounded-xl px-10 py-3 bg-orange-500 h-25 w-516 text-white font-bold hover:bg-white hover:text-orange-500 transition-all ease-in duration-200">
              Comprar
            </button>
          </NavLink>
        </div>
        <div className="max-w-fit">
          <CardMeal />
        </div>
      </div>
    </>
  )
}
