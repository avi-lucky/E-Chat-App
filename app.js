// node server which will handle socket.io connection
const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express();

const publicDirectoryPath = path.join(__dirname, '/public')

app.get('/', function(req, res, next) {
    // console.log(publicDirectoryPath)
    res.render(`${publicDirectoryPath}index.html`)
})

app.use(express.static(publicDirectoryPath))

// const users = {};

// io.on('connection', socket => {
//     socket.on('new-user-joined', name => {
//         users[socket.id] = name;
//         socket.broadcast.emit('user-joined', name)
//     });

//     socket.on('send', message => {
//         socket.broadcast.emit('receive', { message: message, name: user[socket.id] })
//     });
// })

app.use(express.json())

app.listen(8000, () => console.log("Server Up and Running!"));

module.exports = app