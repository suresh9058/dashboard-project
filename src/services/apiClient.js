import axios from "axios";

const baseURL = "https://picsum.photos";

//common headers to all apis can be sent from axios headers
export const apiClient = axios.create({
  baseURL,
});
