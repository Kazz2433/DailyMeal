import axios from 'axios'
import {Request, Response} from 'express'
import { api } from '../libs/axios'

export class foodController{
    async getFood(req:Request,res:Response){
        const response = await api.get('/')
        
        console.log(response.data.meals)
        const result = response.data.meals.map((item: { title: string, sourceUrl:string }) => {
            return{
               nome: item.title,
               sourceUrl:item.sourceUrl
            }
        })

        return res.json(result)
    }
    async getIngredient(req:Request,res:Response){
        res.send({
            ingridient:'banana'
        })
    }
}