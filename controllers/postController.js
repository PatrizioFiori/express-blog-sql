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
    const sql = "SELECT * FROM posts WHERE id = ?"
    connect.query(sql, [id], (err, results) => {
        if (err)
            return res.status(500).json({ error: "DB query failed" })
        if (results.length === 0)
            return res.status(404).json({ err: "post not found" })
        const post = results[0]
        res.json(post)
    })
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

    const sql = "DELETE FROM posts WHERE id = ?"
    connect.query(sql, [id], (err, results) => {
        if (err)
            return res.status(500).json({ error: "DB query failed" })
        if (results.affectedRows === 0)
            return res.status(404).json({ err: "post not found" })
        res.json({ message: `post con ${id} rimosso` })

    })
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}