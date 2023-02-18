import {Request, Response} from 'express'
import { api } from '../libs/axios'

export class foodController{
    async getFood(req:Request,res:Response){
        const users = await fetch('https://api.spoonacular.com/recipes/analyze/?apiKey=98b5f30ea5ae4f4184ee89f8e7cd4c89&id=982374')
        .then((response) => response.json())
        .then((data) => res.json(data))
    }
}