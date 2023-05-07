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

/**
 * 월드컵 등록
 * @param {*} url
 * @param {*} worldcup
 */
export function addWorldCupAPI(url, worldcup) {
  console.log("addWorldCupAPI Start, url : ", url, " worldcup : ", worldcup);
  return axios.post(API_BASE_URL + url, worldcup);
}
