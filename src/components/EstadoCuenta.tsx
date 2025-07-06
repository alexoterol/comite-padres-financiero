import React from 'react';

type Cuota = {
  periodo: string;
  cuota: string;
  cancelado: string;
  pendiente: string;
};

type Ahorro = {
  periodo: string;
  concepto: string;
  valor: string;
};

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
  estudiante: string;
  familia: string;
  fecha: string;
  cuotas: Cuota[];
  ahorros: Ahorro[];
  totalAhorros: string;
};

const EstadoCuenta = ({usuario, estudiante, familia, fecha, cuotas, ahorros, totalAhorros }: Props) => {
  return (
    <section className="estado-cuenta">
      <header className="estado-cuenta__header">
        <img className='estado-cuenta__img' src="src/assets/img/SEO-Logo_Javier.png" alt="Logo Javier" />
        <h2>ESTADO DE CUENTA <br /> 2024-2025</h2>
        <img className='estado-cuenta__img' src="src/assets/img/LOGOPROMO.png" alt="Logo Comité" />
      </header>

      <div className="estado-cuenta__info">
        <p><strong>DE:</strong> Comité de Padres de Familia</p>
        <p><strong>PARA:</strong> {usuario.Apellidos}</p>
        <p><strong>FECHA:</strong> {fecha}</p>
      </div>

      <p className="estado-cuenta__mensaje">
        Es un gusto saludarlos y desearles bienestar para ustedes y sus familias. A continuación, sírvase encontrar el estado de cuenta de las cuotas anuales y saldos de su representado: <strong>{usuario.Nombres} {usuario.Apellidos}</strong>
      </p>

      <h3>Cuota Anual</h3>
      <table className="estado-cuenta__tabla">
        <thead>
          <tr>
            <th>Periodo</th>
            <th>Cuota anual</th>
            <th>Valor cancelado</th>
            <th>Valor pendiente</th>
          </tr>
        </thead>
        <tbody>
          {cuotas.map((c, i) => (
            <tr key={i}>
              <td>{c.periodo}</td>
              <td>{c.cuota}</td>
              <td>{c.cancelado}</td>
              <td>{c.pendiente}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Ahorro personal</h3>
      <table className="estado-cuenta__tabla">
        <thead>
          <tr>
            <th>Periodo</th>
            <th>Concepto</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {ahorros.map((a, i) => (
            <tr key={i}>
              <td>{a.periodo}</td>
              <td>{a.concepto}</td>
              <td>{a.valor}</td>
            </tr>
          ))}
          <tr className="estado-cuenta__total">
            <td colSpan={2}>Total</td>
            <td>{totalAhorros}</td>
          </tr>
        </tbody>
      </table>

      <p className="estado-cuenta__nota">
        (*) Estos valores serán devueltos sin intereses, en caso de que su representado se retire del colegio antes de Tercero de Bachillerato.
      </p>
    </section>
  );
};

export default EstadoCuenta;
