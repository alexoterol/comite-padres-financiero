import { useState } from "react";

const Nav = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav id="nav-section" className="nav">
      <div className="nav__container">
        <button
          className="nav__toggle"
          id="navToggle"
          aria-label="Abrir menú"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>
      <ul className={`nav__menu ${menuAbierto ? "nav__menu--open" : ""}`} id="navMenu">
        <li className="nav__item"><a href="#info" className="nav__link" onClick={cerrarMenu}>Perfil</a></li>
        <li className="nav__item"><a href="#recaudado" className="nav__link" onClick={cerrarMenu}>Recaudado</a></li>
        <li className="nav__item"><a href="#curso" className="nav__link" onClick={cerrarMenu}>Curso</a></li>
        <li className="nav__item"><a href="#cuenta" className="nav__link" onClick={cerrarMenu}>Cuenta</a></li>
        <li className="nav__item"><a href="#footer" className="nav__link" onClick={cerrarMenu}>Final</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
