import { useState } from "react";
import Login from "./components/Login";
import DashboardUsuario from "./components/DashboardUsuario";

function App() {
  const [usuario, setUsuario] = useState(null);

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
