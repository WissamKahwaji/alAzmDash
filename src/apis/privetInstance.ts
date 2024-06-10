import axios from "axios";
import baseURL from "../constants/domain";

const privateInstance = axios.create({ baseURL });
privateInstance.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
privateInstance.interceptors.response.use(
  response => response,
  error => {
    if (error?.response.status === 401) {
      window.location.replace("/sign-in");
    }
    return Promise.reject(error);
  }
);
export default privateInstance;
