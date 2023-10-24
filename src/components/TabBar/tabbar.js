import clsx from "clsx";
import {pg} from 'i18n/index'
import { useNavigate } from "react-router-dom";
import "./tabbar.scss";

export default function TabBar({ index, onChange }) {
  const navigate = useNavigate();

  const clickHandler = (index)=>{
    switch(index){
      case 1:
        navigate('/home')
        break;
      case 2:
        navigate('/product')
        break;
      case 3:
        navigate('/members')
        break;
      case 4:
        navigate('/concat us')
        break;
      case 5:
        navigate('/about us')
        break;
      default :
        navigate('/home')
    }
    onChange&&onChange(index)
  }

  return (
    <div className="tabbar-container">
      <div
        className={clsx("tab-item", index === 1 && "act")}
        onClick={() => {
          clickHandler(1);
        }}
      >
        <div className={clsx("icon icon-home", index === 1 && "fly-animate-float")}></div>
        <span className="item-label">{pg.nav_menu1}</span>
      </div>
      <div
        className={clsx("tab-item", index === 2 && "act")}
        onClick={() => {
          clickHandler(2);
        }}
      >
        <div className={clsx("icon icon-social", index === 2 && "fly-animate-float")}></div>
        <span className="item-label">{pg.nav_menu2}</span>
      </div>
      <div
        className={clsx("tab-item", "center", index === 3 && "act")}
        onClick={() => {
          clickHandler(3);
        }}
      >
        <div className={clsx("icon icon-battle", index === 3 && "fly-animate-jump")}></div>
        <span className="item-label">{pg.nav_menu3}</span>
      </div>
      <div
        className={clsx("tab-item", index === 4 && "act")}
        onClick={() => {
          clickHandler(4);
        }}
      >
        <div className={clsx("icon icon-legend", index === 4 && "fly-animate-float")}></div>
        <span className="item-label">{pg.nav_menu4}</span>
      </div>
      <div
        className={clsx("tab-item", index === 5 && "act")}
        onClick={() => {
          clickHandler(5);
        }}
      >
        <div className={clsx("icon", "icon-info", index === 5 && "fly-animate-float")}></div>
        <span className="item-label">{pg.nav_menu5}</span>
      </div>
    </div>
  );
}
