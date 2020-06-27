import io from "socket.io-client";

const socket = io("https://server-instar-clone.herokuapp.com/");

export default socket;