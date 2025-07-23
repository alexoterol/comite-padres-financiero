import React from 'react';
import type { Usuario } from '../types/Usuario';

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

type Props = {
  usuario: Usuario;
  estudiante: string; // Nombre completo del representado
  familia: string;    // Apellidos de la familia
  fecha: string;
  cuotas: Cuota[];
  ahorros: Ahorro[];
  totalAhorros: string;
};

const EstadoCuenta = ({
  usuario,
  estudiante,
  familia,
  fecha,
  cuotas,
  ahorros,
  totalAhorros
}: Props) => {
  return (
    <section className="estado-cuenta">
      {/* Encabezado institucional con logos */}
      <header className="estado-cuenta__header">
        <img className="estado-cuenta__img" src="/img/SEO-Logo_Javier.png" alt="Logo Javier" />
        <h2>ESTADO DE CUENTA<br />2024-2025</h2>
        <img className="estado-cuenta__img" src="/img/LOGOPROMO.png" alt="Logo Comité" />
      </header>

      {/* Datos generales del destinatario */}
      <div className="estado-cuenta__info">
        <p><strong>DE:</strong> Comité de Padres de Familia (C.P.F.)</p>
        <p><strong>PARA:</strong> Familia {familia}</p>
        <p><strong>FECHA:</strong> {fecha}</p>
      </div>

      {/* Mensaje de bienvenida */}
      <p className="estado-cuenta__mensaje">
        Es un gusto saludarlos y desearles bienestar para ustedes y sus familias. A continuación, sírvase encontrar el estado de cuenta de las cuotas anuales y saldos de su representado: <strong>{estudiante}</strong>.
      </p>

      {/* Tabla de cuotas anuales */}
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
          {cuotas.map((cuota, i) => (
            <tr key={i}>
              <td>{cuota.periodo}</td>
              <td>{cuota.cuota}</td>
              <td>{cuota.cancelado}</td>
              <td>{cuota.pendiente}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Tabla de ahorros personales */}
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
          {ahorros.map((ahorro, i) => (
            <tr key={i}>
              <td>{ahorro.periodo}</td>
              <td>{ahorro.concepto}</td>
              <td>{ahorro.valor}</td>
            </tr>
          ))}
          {/* Total al final */}
          <tr className="estado-cuenta__total">
            <td colSpan={2}>Total</td>
            <td>{totalAhorros}</td>
          </tr>
        </tbody>
      </table>

      {/* Nota legal */}
      <p className="estado-cuenta__nota">
        (*) Estos valores serán devueltos sin intereses, en caso de que su representado se retire del colegio antes de Tercero de Bachillerato.
      </p>
    </section>
  );
};

export default EstadoCuenta;
