import React from "react";
import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";

const UserInfo = () => {
  const { currentUser } = useUserStore();
  //const { chatId } = useChatStore();
  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser?.avatar || "./avatar.png"} alt="" />
        <h5> {currentUser?.username}</h5>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
