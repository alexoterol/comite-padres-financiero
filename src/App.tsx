import { useState } from "react";
import Login from "./components/Login";
import DashboardUsuario from "./components/DashboardUsuario";

type Usuario = {
  Cedula: string;
  Nombres: string;
  Apellidos: string;
  Paralelo: string;
  SaldoFinal: number;
  Deuda: number;
};


function App() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);


  return (
    <div>
      {!usuario ? (
        <Login onLoginSuccess={setUsuario} />
      ) : (
        <DashboardUsuario usuario={usuario} />
      )}
    </div>
  );
}

export default App;
