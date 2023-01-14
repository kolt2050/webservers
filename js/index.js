const express = require("express");

const app = express();

app.get("/", (req, res) => {res.send("I am a endpoint JS Web Server")});

app.listen(7777, () => {console.log("listning on port 777")});
