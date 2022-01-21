import React from "react";
import ButtonWithIcon from "../../01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon";
import Img from "../../01-atoms/Img/Img";
import MenuBar from "../../02-molecules/MenuBar/MenuBar";
import "./styles.css";
import logoRestaurant from "../../../assets/img/logo-restaurant.jpg";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { Redirect } from "react-router-dom";

const SideBar = ({ closeSidebar }) => {
  const { logoutAction } = useAuth();

  const logout = () => {
    Swal.fire({
      title: "Desea cerrar sesión?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#814c3b",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((rpta) => {
      if (rpta.isConfirmed) {
        logoutAction();
      }
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Img src={logoRestaurant} alt="" />
      </div>
      <div className="sidebar__body">
        <MenuBar closeSidebar={closeSidebar} />
        <ButtonWithIcon
          name="Salir"
          onClick={() => logout()}
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
