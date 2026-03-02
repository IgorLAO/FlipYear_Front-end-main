import axios from "axios";

const server = axios.create({
      baseURL: "http://129.148.42.252:5010"
  // baseURL: "http://localhost:5010"
});



export default server;