const index = (req, res) => {
    res.send("server post")
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