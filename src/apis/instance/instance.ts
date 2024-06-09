import axios from "axios";

export const instance = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://158.247.197.244",
  },
});

instance.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (error) => {
    // error logic
    console.log(error);
    const {
      config,
      response: { status },
    } = error;

    if (status !== 401 || config.sent) {
      // 401에러 제외한 에러 처리
      return Promise.reject(error);
    }

    config.sent = true;
    //새 토큰 발급 코드 작성
    const accessToken = "";

    if (accessToken) {
      // 발급한 토큰 적용후 재시도
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return axios(config);
  },
);
