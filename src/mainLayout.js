import React, { useState } from "react";
import ButtonIcon from "./components/01-atoms/Buttons/ButtonIcon/ButtonIcon";
import SideBar from "./components/03-organisms/SideBar/SideBar";
import "./styles/mainLayout.css";

const MainLayout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="main-layout">
      <div className="main-layout__btn-showSidebar">
        <ButtonIcon
          nameIcon="menu"
          sizeIcon="lg"
          action={() => setShowSideBar((prevState) => !prevState)}
        />
      </div>

      <div className={`main-layout__sidebar ${showSideBar && "show"}`}>
        <SideBar />
        <button></button>
      </div>
      <div
        onClick={() =>
          showSideBar ? setShowSideBar((prevState) => !prevState) : null
        }
        className="main-layout__container"
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
