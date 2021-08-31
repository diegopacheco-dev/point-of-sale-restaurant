import React from "react";
import ButtonWithIcon from "../../01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon";

const MenuBar = () => {

  return (
    <div>
      <ButtonWithIcon
        type="menu"
        onClick={""}
        id="/"
        idSelected={"/"}
        nameIcon="dish"
        sizeIcon="md"
      >Vender</ButtonWithIcon>
      <ButtonWithIcon
        type="menu"
        onClick={""}
        idSelected={""}
        id="/pedidos"
        nameIcon="time-five"
        sizeIcon="md"
      >Pedidos</ButtonWithIcon>
      <ButtonWithIcon
        type="menu"
        onClick={""}
        id="/clientes"
        idSelected={""}
        nameIcon="group"
        sizeIcon="md"
      >Clientes</ButtonWithIcon>
      <ButtonWithIcon
        type="menu"
        onClick={""}
        id="/administrar"
        idSelected={""}
        nameIcon="wrench"
        sizeIcon="md"
      >Administrar</ButtonWithIcon>
    </div>
  );
};

export default MenuBar;
