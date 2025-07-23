import { useState } from "react";

export type Usuario = {
  Usuario: string;
  Contraseña: string;
  Apellidos: string;
  Nombres: string;
  Paralelo: string;
  Ahorro8vo: string;
  Pulguero8vo: string;
  NoPiezas: number | string;
  Valor: number | string;
  SaldoPrimeraComunion7mo: string;
  SaldoFinal20222023: string;
  Dev9no: string;
  SaldoNetoFinal20222023: string;
  Ahorro9no: string;
  IntGanados20222023: string;
  Pulguero9no: string;
  SaldoFinal20232024: string;
  Dev10mo: string;
  InteresFondoComun: string;
  SaldoNetoFinal20232024: string;
  Ahorro10mo: string;
  IntGanados20232024: string;
  VentaComida10mo: string;
  Pulguero10mo: string;
  IntGanadosEne2025: string;
  SaldoFinal20242025: string;
  Ahorro1roBach: string;
  UsoSaldoFavor: string;
  IntGanados20242025: string;
  Pulguero1roBach: string;
  OtrosIngresos: string;
  IntGanados: string;
  SaldoFinal20252026: string;
};


type Properties = {
  onLoginSuccess: (user: Usuario) => void;
};

const Login = ({ onLoginSuccess }: Properties) => {
  const [usuario, setUsuario] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!usuario || !pin) {
      setError("Por favor, ingresa tu cédula y PIN.");
      return;
    }

    const url = `https://script.google.com/a/macros/fiec.espol.edu.ec/s/AKfycbzckFUCEhkqn2yFsXE40s_M_ZXpSugI5RBQu60pXsWL2MwqU-AFUj0EHE75SFOOYI4B/exec?usuario=${encodeURIComponent(usuario)}&pin=${encodeURIComponent(pin)}`;


    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        onLoginSuccess(data as Usuario);
      }
    } catch {
      setError("Error al conectar con el servidor.");
    }
  };

  return (
    <div className="login" id="login-section">
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          className="login__input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="login__input"
        />
        <button type="submit" className="login__btn">Ingresar</button>
      </form>
      {error && <div className="login__error">{error}</div>}
    </div>
  );
};

export default Login;

