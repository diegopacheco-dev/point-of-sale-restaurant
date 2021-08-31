import React from "react";
import ButtonWithIcon from "../../01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon";
import Img from "../../01-atoms/Img/Img";
import MenuBar from "../../02-molecules/MenuBar/MenuBar";

const Navbar = () => {
  return (
    <div>
      <Img src="" alt="" />
      <MenuBar />
      <ButtonWithIcon
        name="Salir"
        onClick={() => alert("SALIR")}
        nameIcon="log-out"
        type="menu"
        sizeIcon="sm"
      >Salir</ButtonWithIcon>
    </div>
  );
};

export default Navbar;
