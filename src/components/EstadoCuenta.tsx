import React from 'react';
import type { Usuario } from '../types/Usuario';

const EstadoCuenta = ({ usuario }: { usuario: Usuario }) => {
  const estudiante = `${usuario.Nombres} ${usuario.Apellidos}`;
  const familia = usuario.Apellidos;
  const fecha = new Date().toLocaleDateString('es-EC');

  const cuotas = [
    {
      periodo: '2022-2023',
      cuota: '$200',
      cancelado: usuario.SaldoFinal20222023,
      pendiente: usuario.Dev9no || '$0.00',
    },
    {
      periodo: '2023-2024',
      cuota: '$250',
      cancelado: usuario.SaldoFinal20232024,
      pendiente: usuario.Dev10mo || '$0.00',
    },
    {
      periodo: '2024-2025',
      cuota: '$300',
      cancelado: usuario.SaldoFinal20242025,
      pendiente: usuario.UsoSaldoFavor || '$0.00',
    },
    {
      periodo: '2025-2026',
      cuota: '$350',
      cancelado: usuario.SaldoFinal20252026,
      pendiente: '$0.00',
    },
  ];

  const ahorros = [
    { periodo: 'Octavo', concepto: 'Ahorro', valor: usuario.Ahorro8vo },
    { periodo: 'Octavo', concepto: 'Pulguero', valor: usuario.Pulguero8vo },
    { periodo: 'Noveno', concepto: 'Ahorro', valor: usuario.Ahorro9no },
    { periodo: 'Noveno', concepto: 'Pulguero', valor: usuario.Pulguero9no },
    { periodo: 'Décimo', concepto: 'Ahorro', valor: usuario.Ahorro10mo },
    { periodo: 'Décimo', concepto: 'Pulguero', valor: usuario.Pulguero10mo },
    { periodo: '1ro Bach.', concepto: 'Ahorro', valor: usuario.Ahorro1roBach },
    { periodo: '1ro Bach.', concepto: 'Pulguero', valor: usuario.Pulguero1roBach },
    { periodo: 'Otros', concepto: 'Intereses ganados', valor: usuario.IntGanados },
  ];

  const totalAhorros = ahorros.reduce((acc, a) => {
    const num = parseFloat((a.valor || '0').replace(/[^\d.-]/g, '')) || 0;
    return acc + num;
  }, 0).toFixed(2);

  return (
    <section className="estado-cuenta">
      <header className="estado-cuenta__header">
        <img className="estado-cuenta__img" src="/img/SEO-Logo_Javier.png" alt="Logo Javier" />
        <h2>ESTADO DE CUENTA<br />2024-2025</h2>
        <img className="estado-cuenta__img" src="/img/LOGOPROMO.png" alt="Logo Comité" />
      </header>

      <div className="estado-cuenta__info">
        <p><strong>DE:</strong> Comité de Padres de Familia (C.P.F.)</p>
        <p><strong>PARA:</strong> Familia {familia}</p>
        <p><strong>FECHA:</strong> {fecha}</p>
      </div>

      <p className="estado-cuenta__mensaje">
        Es un gusto saludarlos y desearles bienestar para ustedes y sus familias. A continuación, sírvase encontrar el estado de cuenta de las cuotas anuales y saldos de su representado: <strong>{estudiante}</strong>.
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
            <td>${totalAhorros}</td>
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
