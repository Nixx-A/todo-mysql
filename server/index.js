import express from 'express'
import indexRoutes from "./routes/index.routes.js";
import todosRoutes from "./routes/todos.routes.js";
import cors from "cors";

const app = express()


app.use(cors())

app.use(express.json())
app.use(indexRoutes)
app.use(todosRoutes)


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})