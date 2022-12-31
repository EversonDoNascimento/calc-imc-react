import React from "react";
import logoImage from "../assets/powered.png";
const Header = (props) => {
  return (
    <header className={props.styleHeader}>
      <img src={logoImage} alt="Logo imc"></img>
    </header>
  );
};

export default Header;
