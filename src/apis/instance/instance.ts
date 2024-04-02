import axios from "axios";

export const instance = axios.create({
  baseURL: "",
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  (error) => {
    return error;
  },
);

instance.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (error) => {
    // error logic
    console.log(error);
    return Promise.reject(error);
  },
);
