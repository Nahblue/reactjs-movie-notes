import axios from "axios";

export const api = axios.create({
  baseURL: "https://movienotes-api-0hif.onrender.com"
})