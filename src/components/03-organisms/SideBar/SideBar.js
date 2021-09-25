import React from "react";
import ButtonWithIcon from "../../01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon";
import Img from "../../01-atoms/Img/Img";
import MenuBar from "../../02-molecules/MenuBar/MenuBar";
import "./styles.css";
import logoRestaurant from '../../../assets/img/logo-restaurant.jpg'

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Img src={logoRestaurant} alt="" />
      </div>
      <div className="sidebar__body">
        <MenuBar />
        <ButtonWithIcon
          name="Salir"
          onClick={() => alert("SALIR")}
          nameIcon="log-out"
          type="menu"
          sizeIcon="sm"
        >
          Salir
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default SideBar;
