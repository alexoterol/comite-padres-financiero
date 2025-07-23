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
          estudiante="JUAN MARTIN CALI ORELLANA"
          familia="Familia Cali Orellana"
          fecha="26 de abril de 2025"
          cuotas={[
            { periodo: "2022-2023", cuota: "$60", cancelado: "$60", pendiente: "$0" },
            { periodo: "2023-2024", cuota: "$60", cancelado: "$60", pendiente: "$0" },
            { periodo: "2024-2025", cuota: "$60", cancelado: "$0", pendiente: "$60" },
          ]}
          ahorros={[
            { periodo: "2022-2023", concepto: "Ahorro para actividades de graduación 8vo (*)", valor: "$0.00" },
            { periodo: "2023-2024", concepto: "Ahorro para actividades de graduación 9no (*)", valor: "$0.00" },
            { periodo: "2022-2023", concepto: "Pulguero 8vo (*)", valor: "$23.86" },
            { periodo: "2023-2024", concepto: "Pulguero 9no (*)", valor: "$0.00" },
            { periodo: "2022-2023", concepto: "Intereses ganados por ahorros 8vo.", valor: "$1.70" },
            { periodo: "2023-2024", concepto: "Intereses ganados por ahorros 9no.", valor: "$2.24" },
          ]}
          totalAhorros="$27.80"
        />

        <Cuenta />
      </main>
    </div>
  );
};

export default DashboardUsuario;
