const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("I am an endpoint");
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})
