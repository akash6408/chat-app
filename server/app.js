import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const PORT = 3000;

const app = express();
const server = new createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true
    }
});

app.get("/", () => {

})

io.on("connection", (socket) => {
    console.log("User connected");
    console.log("SocketId", socket.id);

    socket.emit("welcome", "welcome")
})

server.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})