import React from "react";
import { useHistory, useLocation } from "react-router";
import ButtonWithIcon from "../../01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon";
import "./styles.css";

const MenuBar = ({ closeSidebar }) => {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className="menubar">
      <ButtonWithIcon
        type="menu"
        onClick={() => {
          location.pathname !== "/" && history.push("/");
          closeSidebar();
        }}
        id="/"
        idSelected={location.pathname}
        nameIcon="dish"
        sizeIcon="md"
      >
        Vender
      </ButtonWithIcon>
      <ButtonWithIcon
        type="menu"
        onClick={() => {
          location.pathname !== "/pedidos" && history.push("/pedidos");
          closeSidebar();
        }}
        idSelected={location.pathname}
        id="/pedidos"
        nameIcon="time-five"
        sizeIcon="md"
      >
        Pedidos
      </ButtonWithIcon>
      <ButtonWithIcon
        type="menu"
        onClick={() => {
          location.pathname !== "/clientes" && history.push("/clientes");
          closeSidebar();
        }}
        id="/clientes"
        idSelected={location.pathname}
        nameIcon="group"
        sizeIcon="md"
      >
        Clientes
      </ButtonWithIcon>
      <ButtonWithIcon
        type="menu"
        onClick={() => {
          location.pathname !== "/administrar" && history.push("/administrar");
          closeSidebar();
        }}
        id="/administrar"
        idSelected={location.pathname}
        nameIcon="wrench"
        sizeIcon="md"
      >
        Administrar
      </ButtonWithIcon>
    </div>
  );
};

export default MenuBar;
