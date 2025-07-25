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
        <Perfil
          nombre={`${usuario.Nombres} ${usuario.Apellidos}`}
          paralelo={usuario.Paralelo}
        />

        <Resumen
          saldo={usuario.SaldoFinal20252026}
          deuda={usuario.SaldoFinal20252026}
        />

        <EstadoCuenta
          usuario={usuario}
        />

        <Cuenta />
      </main>
    </div>
  );
};

export default DashboardUsuario;
