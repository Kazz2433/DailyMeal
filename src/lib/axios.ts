import axios from "axios"

export const api = axios.create({
  baseURL: `https://api.spoonacular.com/mealplanner/generate?apiKey=7aa5c685ad9c49eb949ce9f8264c62b4&timeFrame=day`,
})