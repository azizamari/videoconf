const express = require('express');
const {v4: uuidv4}=require('uuid');

const app = express();
const server=require('http').Server(app);

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

const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log("Listening on port "+PORT);
})