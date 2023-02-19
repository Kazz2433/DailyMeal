import axios from "axios";

export const api = axios.create({
    baseURL:`https://api.spoonacular.com/mealplanner/generate?apiKey=98b5f30ea5ae4f4184ee89f8e7cd4c89&timeFrame=day`
})