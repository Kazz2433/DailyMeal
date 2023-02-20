import express from 'express'
import { router } from './routes/foodRoute'
import cors from 'cors'

const app = express()

const port = process.env.PORT || 30001

app.use(express.json())
app.use(cors({
    origin:'*'
}))
app.use(router)

app.listen(port, () => {
  console.log("SERVER RUNNING")
})