import io from "socket.io-client";
import { baseUrl } from "../Constants/BaseURL";

const socketConnection = io(baseUrl);

export default socketConnection;