import axios from "axios";

export const axiosCustom = axios.create({
  baseURL: "http://localhost:5173/productshttps://some-domain.com/api/",
  timeout: 1000,
  headers: { "Content-Type": "Application/Json" },
});
