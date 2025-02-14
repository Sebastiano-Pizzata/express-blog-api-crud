const arrayPosts = require("../data/data.js")

// index
function index(req, res) {
    let filteredPosts = arrayPosts;

    if (req.query.tags) {
        filteredPosts = arrayPosts.filter(element => element.tags.includes(req.query.tags))
    };

    res.json(filteredPosts)
}

// show
function show(req, res) {
    const id = parseInt(req.params.id)
    const post = arrayPosts.find(post => post.id === id);

    if (!post) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    res.json(post);
}

// store
function store(req, res) {
    const newId = arrayPosts[arrayPosts.length - 1].id + 1;

    const nuovaRicetta = {
        id: newId,
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        image: req.body.image,
        tags: req.body.tags
    }
    arrayPosts.push(nuovaRicetta)
    console.log(arrayPosts)

    res.status(201);
    res.json(nuovaRicetta)
}

// update
function update(req, res) {
    res.send("Modifica integrale del Post" + req.params.id)
}

function patch(req, res) {
    res.send("Modifica parziale del Post" + req.params.id)
}


function destroy(req, res) {
    const id = parseInt(req.params.id);
    const post = arrayPosts.find(element => element.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }


    arrayPosts.splice(arrayPosts.indexOf(post))

    res.sendStatus(204)
}


module.exports = { index, show, update, patch, destroy, store }