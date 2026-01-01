// src/socket.js
import { io } from "socket.io-client";

// Connect to backend using environment variable
const socket = io(import.meta.env.VITE_API_BASE_URL, {
  transports: ["websocket"],
});

export default socket;
