import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AppContext } from "context";
import TabBar from "components/TabBar/tabbar";

let data = sessionStorage.getItem("alldata");
let ALL_DATA = JSON.parse(data) || {};

function Layout() {
  const [globalData, setGlobalData] = useState({ userInfo: {} });

  const setAllData = (newValue) => {
    ALL_DATA = Object.assign({}, ALL_DATA, newValue);
    sessionStorage.setItem("alldata", JSON.stringify(ALL_DATA));
  };

  const allData = ALL_DATA;

  const location = useLocation();
  let defaultIndex = 1;
  if (location.pathname.indexOf("/about") > -1) {
    defaultIndex = 5;
  } else if (location.pathname.indexOf("/concat") > -1) {
    defaultIndex = 4;
  } else if (location.pathname.indexOf("/member") > -1) {
    defaultIndex = 3;
  } else if (location.pathname.indexOf("/product") > -1) {
    defaultIndex = 2;
  }
  const [index, setIndex] = useState(defaultIndex);
  return (
    <AppContext.Provider
      value={{ globalData, setGlobalData, allData, setAllData }}
    >
      <Outlet />
      <TabBar index={index} onChange={setIndex} />
    </AppContext.Provider>
  );
}

export default Layout;
