import React from "react"
import GithubIcon from "../assets/github-mark-white.png"

export function GithubButton() {
  const urlGithub = "https://github.com/revogabe/dailymeal"

  const handleClickGithub = () => {
    window.open(urlGithub, "_blank")
  }
  return (
    <>
      <button
        onClick={handleClickGithub}
        className=" bg-orange-500 text-white rounded-md py-4 px-12 w-full font-bold flex gap-2 items-center justify-center hover:invert hover:bg-black transition-all duration-200 ease-out hover:scale-105 max-tablet:invert max-tablet:bg-black"
      >
        <img className="h-6 w-6 " src={GithubIcon} alt="Icon Github" />
        Github
      </button>
    </>
  )
}
