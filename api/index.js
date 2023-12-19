//EXPRESS Simplifica a criação dos Servidores usando NODE.JS
import express from "express"

//USERROUTES São as rotas HTTP "GET" "PUT" "POST" "DELETE"
import userRoutes from "./routes/users.js"

//CORS Cuida da segurança das requisições
import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors())

app.use("/", userRoutes)

app.listen(8800)