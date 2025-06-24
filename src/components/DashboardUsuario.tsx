import Nav from "./Nav";
import Perfil from "./Perfil";
import Resumen from "./Resumen"; // lo crearemos luego
import CursoResumen from "./CursoResumen"; // lo crearemos luego
import Cuenta from "./Cuenta"; // lo crearemos luego
// import Modales from "./Modales"; // opcional

type Usuario = {
  Cedula: string;
  Nombres: string;
  Apellidos: string;
  Paralelo: string;
  SaldoFinal: number;
  Deuda: number;
};

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
          saldo={usuario.SaldoFinal}
          deuda={usuario.Deuda}
        />


        <CursoResumen paralelo={usuario.Paralelo} />

        <Cuenta />
      </main>
    </div>
  );
};

export default DashboardUsuario;
