import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../context";
import { getUserInfo } from "api/account";
import { getHomeData } from "api/platform";
import Header from "components/Header/header";
import "./home.scss";

export default function Home() {
  const { globalData, setGlobalData, allData, setAllData } =
    useContext(AppContext);
  let globalUser = globalData.userInfo;
  const [userInfo, setUserInfo] = useState(globalUser);
  const [data, setData] = useState(allData.home);

  const updateUser = () => {
    getUserInfo().then((res) => {
      setUserInfo(res);
      setGlobalData({ userInfo: res });
    });
  };

  const getHome = () => {
    getHomeData().then((res) => {
      setData(res);
      setAllData({ home: res });
    });
  };

  useEffect(() => {
    getHome();
    if (!userInfo.uid) {
      updateUser();
    }
  }, []);


  return (
    <div className="home">
      <Header userInfo={userInfo} />
    </div>
  );
}
