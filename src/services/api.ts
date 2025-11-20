import axios from "axios";

const api = axios.create({
  baseURL: "https://sua-api.com",
  withCredentials: true // caso você use cookies HTTP-Only
});

export default api;