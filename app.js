const express = require('express');
const app = express();
const port = 2000;

const postsRouter = require("./routers/posts.js")

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio Blog")
})

app.use("/posts", postsRouter);

app.listen(port, () => {
    console.log(`server ${port}`)
})