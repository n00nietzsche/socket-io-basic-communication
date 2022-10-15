import { io } from "socket.io-client";

const socket = io("ws://localhost:3000");

// 서버로 메세지 보내기
socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });

// 서버로부터 메세지 받기
socket.on("hello from server", (...args) => {
  console.log("서버로부터 메세지 받음", args);
});
