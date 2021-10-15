import React from "react";
import ButtonIcon from "../../01-atoms/Buttons/ButtonIcon/ButtonIcon";
import Heading from "../../01-atoms/Heading/Heading";
import IconElement from "../../01-atoms/IconElement/IconElement";
import "./styles.css";

const CustomerCard = ({ name, SetClientePedido = () => {} }) => {
  return (
    <div className="customer-card">
      <div>
        <IconElement name="user" color="" size="sm" type="rounded" />
        <Heading size="xs">{name}</Heading>
      </div>
      <ButtonIcon
        nameIcon="x"
        action=""
        sizeIcon="sm"
        action={() => SetClientePedido(null)}
      />
    </div>
  );
};

export default CustomerCard;
