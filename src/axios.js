import axios from "axios";
import Cookies from "js-cookie";

// TODO 추후 서버 배포후 API 주소 변경 예정
// const API_BASE_URL = "http://localhost:3000";
const API_BASE_URL = "http://13.125.1.214";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios.defaults.xsrfCookieName = "csrftoken";
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.withCredentials = true; // withCredentials 전역 설정

// 해결해야 하는 코드
// const axios = axiosOriginal.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//     "X-Requested-With": "XMLHttpRequest",
//   },
// });

axios.interceptors.request.use(
  (config) => {
    // 서버에서 헤더에 token 과 refreshToken 을 가져오는 로직
    const token = sessionStorage.getItem("token");
    const refreshtoken = sessionStorage.getItem("refreshtoken");
    console.log(token);

    if (token) {
      config.headers["Authorization"] = token.trim();
      config.headers["refreshtoken"] = refreshtoken.trim();
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

// export function addWorldCupAPI(url, worldcup) {
//   console.log("addWorldCupAPI Start, url : ", url, " worldcup : ", worldcup);
//   return axios.post(API_BASE_URL + url, worldcup);
// }

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = sessionStorage.getItem("refreshToken");
      try {
        const res = await axios.post(API_BASE_URL + "/token/refresh/", {
          refresh: refreshToken,
        });
        sessionStorage.setItem("token", res.data.access);
        originalRequest.headers["Authorization"] = "Bearer " + res.data.access;
        return axios(originalRequest);
      } catch (err) {
        console.error("Failed to refresh access token:", err);
        // 추가적인 처리가 필요한 경우 이곳에 작성하세요.
      }
    }
    return Promise.reject(error);
  }
);