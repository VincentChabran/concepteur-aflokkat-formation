import { io } from "socket.io-client";

const container = document.getElementById("container");
const messageInput = document.getElementById("message-input");
const form = document.getElementById("form");

const socket = io("http://localhost:3001");

socket.on("connect", (data) => {
   console.log(data);
});

socket.on("message-back", (message) => {
   console.log(message);

   displayMessage(message);
});

form.addEventListener("submit", (e) => {
   e.preventDefault();

   if (messageInput.value) {
      socket.emit("message", messageInput.value);
      displayMessage(messageInput.value);
   }

   messageInput.value = "";
});

function displayMessage(message) {
   const div = document.createElement("div");
   div.textContent = message;
   container.append(div);
}
