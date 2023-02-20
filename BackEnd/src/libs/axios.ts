import axios from "axios"

export const api = axios.create({
  baseURL: `https://api.spoonacular.com/mealplanner/generate?apiKey={changekeyapi}&timeFrame=day`,
})
