import { useState } from "react";
import Login from "./components/Login";
import DashboardUsuario from "./components/DashboardUsuario";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
    <>
      <Header /> {/* Siempre visible */}

      {!usuario ? (
        <Login onLoginSuccess={setUsuario} />
      ) : (
        <DashboardUsuario usuario={usuario} />
      )}

      <Footer />
    </>
  );
}

export default App;
