import React from "react"
import Logotype from "../assets/Logotype.png"
import GithubIcon from "../assets/github-mark-white.png"

export default function Header() {
  return (
    <div className="flex justify-center items-center py-12 w-full max-tablet:mb-8 window:justify-between">
      <img
        className="h-max w-max window:h-24 window:w-18 scale-75 window:scale-100 tablet:scale-50"
        src={Logotype}
        alt="Logo da DailyMeal"
      />
      <button className="max-window:hidden bg-orange-500 text-white rounded-md py-4 px-12 font-bold flex gap-2 items-center justify-center hover:invert hover:bg-black transition-all duration-200 ease-out hover:scale-105">
        <img className="h-6 w-6 " src={GithubIcon} alt="Icon Github" />
        Github
      </button>
    </div>
  )
}
