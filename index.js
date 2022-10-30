import express from "express";
import bodyParser from 'body-parser'

import userRoutes from "./routes/users.js";

const app = express()
const port = 5000

app.use(bodyParser.json())

app.use('/users', userRoutes)

// app.get('/', (req, res) => { 
//   console.log('test')
//   res.send("hello")
// })

app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`))