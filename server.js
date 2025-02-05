const { log } = require("console");
const express = require("express");
const app = express()
const port = 3000

//import middleware
const notFound = require("./middlewares/notFound")
const errorHandler = require("./middlewares/errorHandler")

const postRouter = require("./routes/posts")

//middleware per asset statici
app.use(express.static("public"))

//parsing del body
app.use(express.json())

app.get("/", (req, res) => {
    res.send("server blog connesso")
})


app.use("/posts", postRouter)


//gestione errori 404 e 500 tramite middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
    log("sono in ascolto alla port: 3000")
})