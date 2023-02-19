import express from 'express'
import { router } from './routes/foodRoute'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({
    origin:'*'
}))
app.use(router)

app.listen(3001, () => {
    console.log('SERVER RUNNING')
})