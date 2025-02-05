const connect = require("../data/db")

const index = (req, res) => {

    const sql = "SELECT * FROM posts"
    connect.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "Query al db fallita" })
        res.json(results)

    })
}

const show = (req, res) => {
    const id = req.params.id
    res.send(`Dettagli post ${id}`)
}

const store = (req, res) => {
    res.send("Creazione nuovo post")
}

const update = (req, res) => {
    const id = req.params.id
    res.send(`Modifica post ${id}`)
}

const modify = (req, res) => {
    const id = req.params.id
    res.send(`Modifica post ${id}`)
}

const destroy = (req, res) => {
    const id = req.params.id
    res.send(`Elimina post ${id}`)
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}