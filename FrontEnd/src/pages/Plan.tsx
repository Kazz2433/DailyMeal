import React from "react"
import { NavLink } from "react-router-dom"

export default function MealPlan() {
  return (
    <div>
      <h1>Meal Plan</h1>
      <NavLink to="/" title="Home">
        <button>Voltar</button>
      </NavLink>
    </div>
  )
}
