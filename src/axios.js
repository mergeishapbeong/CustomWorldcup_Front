import axios from "axios";

// TODO 추후 서버 배포후 API 주소 변경 예정
const API_BASE_URL = "http://localhost:3000";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export function postAPI(url, data) {
  console.log("POST Start, url : ", url, " user : ", data);
  return axios.post(API_BASE_URL + url, data);
}

export function putAPI(url, data) {
  console.log("PUT Start, url : ", url, " user : ", data);
  return axios.put(API_BASE_URL + url, data);
}

export function getAPI(url) {
  console.log("GET Start, url : ", url);
  return axios.get(API_BASE_URL + url);
}

export function deleteAPI(url) {
  console.log("DELETE Start, url : ", url);
  return axios.delete(API_BASE_URL + url);
}
