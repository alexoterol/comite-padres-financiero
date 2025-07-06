import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        src="src/assets/img/LOGOPROMO.png" 
        className="nav__logo"
        alt="Logo de Promoción 67"
      />
      <h1 className="header__title">Recaudaciones Promoción 67</h1>
    </header>
  );
};

export default Header;
