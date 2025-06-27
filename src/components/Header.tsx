import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        src="src/assets/img/SEO-Logo_Javier.png" 
        className="nav__logo"
        alt="Logo Colegio Javier"
      />
      <h1 className="header__title">Recaudaciones Javier</h1>
    </header>
  );
};

export default Header;
