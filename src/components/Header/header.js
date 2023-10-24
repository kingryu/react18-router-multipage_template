import { useNavigate } from "react-router-dom";
import { getAvatar } from "utils";
import "./header.scss";

export default function Header({userInfo}) {
  const navigate = useNavigate();

  const goAbout = () => {
    navigate('/aboutus')
  }

  return (
    <div className="header-con">
      <div className="user">
        <img
          className="avatar"
          src={getAvatar(userInfo.avatarId || 0)}
          alt="avatar"
        />
        <span className="nickname">{userInfo.nickName || ""}</span>
      </div>
      <div className="bar"></div>
    </div>
  );
}
