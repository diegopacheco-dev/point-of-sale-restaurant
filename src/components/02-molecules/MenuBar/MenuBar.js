import React from "react";
import { useHistory } from "react-router-dom";
import ButtonWithIcon from "../../01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon";

const MenuBar = () => {
    const history = useHistory();

  return (
    <div>
      <ButtonWithIcon
        name="Vender"
        type="categoria"
        onClick={() => history.push("/")}
        id="/"
        idSelected={history.location.path}
        nameIcon="dish"
        sizeIcon="md"
      />
      <ButtonWithIcon
        name="Pedidos"
        onClick={() => history.push("/pedidos")}
        id="/pedidos"
        idSelected={history.location.path}
        nameIcon="time-five"
        sizeIcon="md"
      />
      <ButtonWithIcon
        name="Clientes"
        onClick={() => history.push("/clientes")}
        id="/clientes"
        idSelected={history.location.path}
        nameIcon="group"
        sizeIcon="md"
      />
      <ButtonWithIcon
        name="Administrar"
        onClick={() => history.push("/administrar")}
        id="/administrar"
        idSelected={history.location.path}
        nameIcon="wrench"
        sizeIcon="md"
      />
    </div>
  );
};

export default MenuBar;
