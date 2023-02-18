import express from 'express'
import { router } from './routes/foodRoute'

const app = express()

app.use(express.json())
app.use(router)

app.listen(3338, () => {
    console.log('SERVER RUNNING')
})