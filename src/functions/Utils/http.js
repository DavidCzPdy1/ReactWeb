import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001/",
  //baseURL: "https://8fd1f646-df24-412b-b0e3-314b678b9335-00-3mux7ta55360e.kirk.replit.dev:3001/",
  headers: {
    "Content-type": "application/json"
  }
});


export default http