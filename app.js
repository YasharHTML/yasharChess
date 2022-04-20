const express = require('express');
const fs = require('fs');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("move", (data) => { socket.broadcast.emit("move_to", data) });
    socket.on("capture", (data) => { socket.broadcast.emit("capture_to", data) });
});

app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static('public'));

app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname + "/html" });
});

app.post('/post', (req, res) => {
    console.log(req.body.name);
    res.end();
});

server.listen(3000);