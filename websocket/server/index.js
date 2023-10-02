import { Server } from "socket.io";

const io = new Server(3001, {
   cors: {
      origin: ["http://127.0.0.1:5173"],
   },
});

io.on("connection", (socket) => {
   console.log(socket.id);

   socket.on("message", (message) => {
      console.log(message);

      socket.broadcast.emit("message-back", message);
   });
});
