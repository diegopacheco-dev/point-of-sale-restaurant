import React from "react";
import ButtonWithIcon from "./ButtonWithIcon";

export default {
  title: "Atoms/ButtonWithIcon",
  component: ButtonWithIcon,
};

export const Categoria = () => (
  <ButtonWithIcon
    children="Button"
    type="categoria"
    onClick={() => alert("hola")}
    id=""
    nameIcon="ghost"
    sizeIcon="md"
  >
    Categoria
  </ButtonWithIcon>
);
export const Menu = () => (
  <ButtonWithIcon
    children="Button"
    type="menu"
    onClick={()=>alert("mundo")}
    id=""
    idSelected=""
    nameIcon="ghost"
    sizeIcon="md"
  >
    Menu
  </ButtonWithIcon>
);
