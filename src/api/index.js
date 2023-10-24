import config from 'utils/config';
import axios from "axios";
import { Toast } from "antd-mobile";

let baseURL = `/api/`;
if(window.location.hostname.indexOf('localhost')>-1||window.location.hostname.indexOf('192.168.')>-1){
  baseURL = `http://${window.location.hostname}:5008/api/`;
}

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,


});
const getDataFromBody = (body) => {
  const { code, message, data } = body;
  if (code !== 0 && code !== 1) { 
    Toast.show({
      content: message || 'error please try again later',
      duration:3000
    });
    if(code === 401){
      // window.location.href = config.loginUrl
    }
    const err = new Error(message || "Unspecified");
    err.name = "CustomError";
    throw err;
  }
  return data;
};

/* //  添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
*/

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response) => getDataFromBody(response.data),
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    Toast.show({
      content: error.message||'error! please try again later',
      duration:3000
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;
