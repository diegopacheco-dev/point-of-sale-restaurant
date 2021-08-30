import React from "react";
import ButtonWithIcon from "./components/01-atoms/Buttons/ButtonWithIcon/ButtonWithIcon";

const App = () => {
  return (
    <div>
      <ButtonWithIcon
        children="Button"
        type="menu"
        onClick={() => alert("mundo")}
        id=""
        idSelected=""
        nameIcon="ghost"
        sizeIcon="md"
      >
        Menu
      </ButtonWithIcon>
    </div>
  );
};

export default App;
