"use strict";
const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("hello, world");
});
const server = app.listen(process.env.PORT||3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
