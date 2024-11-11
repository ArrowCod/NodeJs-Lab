const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

app.post("/health-cheakup", function(req, res){

    const kidneys = req.body.kidneys;

    const kidneyLength = kidneys.length;

    res.send("you have" + kidneyLength + "kidneys");
});

app.listen(3000);