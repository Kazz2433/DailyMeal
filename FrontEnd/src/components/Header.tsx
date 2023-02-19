import React from "react"
import Logotype from "../assets/Logotype.png"
import { GithubButton } from "./GithubButton"

export default function Header() {
  return (
    <div className="flex justify-center items-center py-12 w-full max-tablet:mb-8 window:justify-between tablet:mb-8">
      <img
        className="h-max w-max window:h-16 window:w-max scale-75 window:scale-100 tablet:scale-50"
        src={Logotype}
        alt="Logo da DailyMeal"
      />
      <div className="max-window:hidden">
        <GithubButton />
      </div>
    </div>
  )
}
