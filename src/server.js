import { Server } from "socket.io";

const io = new Server(3000);

io.on("connection", (socket) => {
  // 메세지 보내기
  socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // 메세지 응답하기
  socket.on("hello from client", (...args) => {
    console.log("클라이언트로부터 메세지 받음", args);
  });
});
