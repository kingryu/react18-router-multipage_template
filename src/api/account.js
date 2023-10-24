import axiosInstance from "api/index";

export const sendEmailCode = (email, captchaType = "bind_email") =>
  axiosInstance.post("/sendCaptcha", {
    email,
    captchaType,
  });

export const getAuthUrl = (channel, ext) => {
  return axiosInstance.get(
    `/authorize?channelType=${channel}&ext=${channel}-${ext}`
  );
};

export const getUserInfo = () =>
  axiosInstance.post("/userInfo", { a: 1 });
