import Nav from "./Nav";
import Perfil from "./Perfil";
import Resumen from "./Resumen"; 
import Cuenta from "./Cuenta"; 
import EstadoCuenta from "./EstadoCuenta"; 
import type { Usuario } from "../types/Usuario";

type Props = {
  usuario: Usuario;
};

const DashboardUsuario = ({ usuario }: Props) => {
  return (
    <div>
      <Nav />

      <main className="main-info" id="main-content">
        <Perfil usuario={usuario} />

        <Resumen usuario={usuario} />

        <EstadoCuenta usuario={usuario} />

        <Cuenta />
      </main>
    </div>
  );
};

export default DashboardUsuario;
