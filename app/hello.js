"use strict";
const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("hello, world");
});

app.get("/login", (req,res) => {
    res.send("login");
});

app.get("/new", (req,res) => {
    res.send("new");
});

const server = app.listen(process.env.PORT||3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
