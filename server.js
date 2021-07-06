const express = require('express');
const app = express();
const server=require('http').Server(app);
const socketio= require('socket.io');
const {v4: uuidv4}=require('uuid');
const io = socketio(server)
app.set('view engine', 'ejs')
app.set('veiws');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.redirect(`/${uuidv4()}`);
});

app.get('/:room',(req,res)=>{
    res.render('room',{
        roomId:req.params.room,
    });
});

io.on('connection',socket=>{
    socket.on('join-room',(roomId)=>{
        console.log('joined room');
        socket.join(roomId);
        socket.to(roomId).emit('user-connected')
    });
});

const PORT=process.env.PORT || 3030;
server.listen(PORT,()=>{
    console.log("Listening on port "+PORT);
})