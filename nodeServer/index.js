// node server which will handle socket.io connection
const io = require('socket.io')(5000, {
    cors: {
        origin: '*',
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        credentials: true
    }
});

const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        console.log("New User", name)
        users[socket.id] = name;
        // console.log(name)
        socket.broadcast.emit('user-joined', name)
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: user[socket.id] })
    });
})