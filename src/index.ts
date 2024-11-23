import { WebSocketServer } from "ws";


const wss = new WebSocketServer({port:8000});

// event handle
wss.on("connection", function(socket){
    console.log("user connected");
    socket.send("hello");

    socket.on("message",function(e){
        console.log(e.toString());
        if(e.toString() === "ping"){
            socket.send("pong")
        }
    });

})