import React from "react";
import ButtonWithIcon from "../../01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon";

const MenuBar = () => {

  return (
    <div>
      <ButtonWithIcon
        name="Vender"
        type="menu"
        onClick={""}
        id="/"
        idSelected={"/"}
        nameIcon="dish"
        sizeIcon="md"
      />
      <ButtonWithIcon
        name="Pedidos"
        type="menu"
        onClick={""}
        idSelected={""}
        id="/pedidos"
        nameIcon="time-five"
        sizeIcon="md"
      />
      <ButtonWithIcon
        name="Clientes"
        type="menu"
        onClick={""}
        id="/clientes"
        idSelected={""}
        nameIcon="group"
        sizeIcon="md"
      />
      <ButtonWithIcon
        name="Administrar"
        type="menu"
        onClick={""}
        id="/administrar"
        idSelected={""}
        nameIcon="wrench"
        sizeIcon="md"
      />
    </div>
  );
};

export default MenuBar;
