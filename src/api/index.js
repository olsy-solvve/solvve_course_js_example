import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});

api.interceptors.request.use(
  (config) => {
    console.log("request start");
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (config) => {
    console.log("request end");
    return config;
  },
  (error) => Promise.reject(error)
);

export const getPeople = (page = 1) =>
  api.get(`people?page=${page}`).then(({ data }) => data.results);

export default api;
