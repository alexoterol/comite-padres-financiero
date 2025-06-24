import { useState } from "react";

type Usuario = {
  Cedula: string;
  Nombres: string;
  Apellidos: string;
  Paralelo: string;
  SaldoFinal: number;
  Deuda: number;
};

type Props = {
  onLoginSuccess: (user: Usuario) => void;
};

const Login = ({ onLoginSuccess }: Props) => {
  const [cedula, setCedula] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!cedula || !pin) {
      setError("Por favor, ingresa tu cédula y PIN.");
      return;
    }

    const url = `https://script.google.com/macros/s/AKfycbz1NFlruXf3drBc6qiLvks_FXuYro7PAA0rq2_G_fRpVOH8C1xBWbkBe8NDYPJud-krXg/exec?cedula=${encodeURIComponent(cedula)}&pin=${encodeURIComponent(pin)}`;


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
          placeholder="Cédula"
          value={cedula}
          onChange={(e) => setCedula(e.target.value)}
          className="login__input"
        />
        <input
          type="password"
          placeholder="PIN"
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

