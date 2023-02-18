import React from "react"
import Logotype from "../assets/Logotype.png"

export default function Header() {
  return (
    <div className="flex justify-center items-center p-12">
      <img className="h-20 w-85" src={Logotype} alt="Logo da DailyMeal" />
    </div>
  )
}
