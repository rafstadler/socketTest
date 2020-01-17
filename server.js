import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';


const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const PORT = 4001;
server.listen(PORT);
console.log('Server is running');

app.use(bodyParser.urlencoded({ extended: true }));


const connections = [];

io.sockets.on('connection',(socket) => {
   connections.push(socket);
   console.log(' %s sockets is connected', connections.length);

   socket.on('disconnect', () => {
      connections.splice(connections.indexOf(socket), 1);
   });

//   socket.on('sending message', (message) => {
//      console.log('Message is received :', message);
//
//      io.sockets.emit('new message', {message: message});
//   });
});


//app.post('/poid',(req,res)=>{
//    console.log(req.body.value);
//    io.sockets.emit('nouveau poid', {poid: req.body.value});
//    res.json({success:"ok"});
//});
//
//app.post('/angle',(req,res)=>{
//    console.log(req.body.value);
//    io.sockets.emit('nouvel angle', {angle: req.body.value});
//    res.json({success:"ok"});
//});

app.get('/poid',(req,res)=>{
    console.log(req.query.value);
    io.sockets.emit('nouveau poid', {poid: req.query.value});
    res.json({success:"ok"});
});

app.get('/angle',(req,res)=>{
    console.log(req.query.value);
    io.sockets.emit('nouvel angle', {angle: req.query.value});
    res.json({success:"ok"});
});

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});