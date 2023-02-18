import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Plan from "../pages/Plan"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mealplan" element={<Plan />} />
    </Routes>
  )
}
