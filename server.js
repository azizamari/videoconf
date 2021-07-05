const express = require('express');

const app = express();
const server=require('http').Server(app);

app.set('view engine', 'ejs')
app.set('veiws');

app.get('/',(req,res)=>{
    res.render('room');
});


const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log("Listening on port "+PORT);
})