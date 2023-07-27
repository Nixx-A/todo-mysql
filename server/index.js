import express from 'express'
import indexRoutes from "./routes/index.routes.js";
import todosRoutes from "./routes/todos.routes.js";
import cors from "cors";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);


app.use(cors())
app.use(express.json())

app.use(indexRoutes)
app.use(todosRoutes)

app.use(express.static(join(__dirname, "../client/dist")))

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})