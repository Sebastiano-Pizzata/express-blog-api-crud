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
    res.send("Creazione nuovo Post" + req.params.id)
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