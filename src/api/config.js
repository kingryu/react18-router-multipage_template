import axiosInstance from "api/index";


export const sendReport = (title, problem) =>
  axiosInstance.post("/service/report", { title, problem });
