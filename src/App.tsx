import { useState } from "react";
import Login from "./components/Login";
import DashboardUsuario from "./components/DashboardUsuario";
import Header from "./components/Header";
import Footer from "./components/Footer";
import type { Usuario } from "./types/Usuario"; // ✅ Mejor extraer el tipo a un archivo compartido

const App = () => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  return (
    <>
      <Header />

      <main>
        {!usuario ? (
          <Login onLoginSuccess={setUsuario} />
        ) : (
          <DashboardUsuario usuario={usuario} />
        )}
      </main>

      <Footer />
    </>
  );
};

export default App;
