import type { Usuario } from '../types/Usuario';

const EstadoCuenta = ({ usuario }: { usuario: Usuario }) => {
  const estudiante = `${usuario.Nombres} ${usuario.Apellidos}`;
  const familia = usuario.Apellidos;
  const fecha = new Date().toLocaleDateString('es-EC');

  // 🔧 Función reutilizable para formatear valores monetarios
  const formatMonto = (valor: string | number | undefined | null): string => {
    if (valor === undefined || valor === null || valor === "") return "-";
    const num = typeof valor === "number" ? valor : parseFloat(valor.toString().replace(/[^\d.-]/g, ''));
    return isNaN(num) ? "-" : `$${num.toFixed(2)}`;
  };

  // 💰 Cuotas anuales y montos pagados/pedientes
  const cuotas = [
    {
      periodo: '2022-2023',
      cuota: '$200.00',
      cancelado: formatMonto(usuario.Saldofinal20222023),
      pendiente: formatMonto(usuario.DevAlumnosquedejaronelcolegioen9no),
    },
    {
      periodo: '2023-2024',
      cuota: '$250.00',
      cancelado: formatMonto(usuario.SaldoFinal20232024),
      pendiente: formatMonto(usuario.DevAlumnosquedejaránelcolegioen10mo),
    },
    {
      periodo: '2024-2025',
      cuota: '$300.00',
      cancelado: formatMonto(usuario.SaldoFinal20242025),
      pendiente: formatMonto(usuario.UsodelSaldoafavordel20242025),
    },
    {
      periodo: '2025-2026',
      cuota: '$350.00',
      cancelado: formatMonto(usuario.SaldoFinal20252026),
      pendiente: "$0.00",
    },
  ];

  // 🏦 Ahorros por periodo y concepto
  const ahorros = [
    { periodo: 'Octavo', concepto: 'Ahorro', valor: usuario.Ahorro8vo },
    { periodo: 'Octavo', concepto: 'Pulguero', valor: usuario.Pulguero8voValor },
    { periodo: 'Noveno', concepto: 'Ahorro', valor: usuario.Ahorro9no },
    { periodo: 'Noveno', concepto: 'Pulguero', valor: usuario.Pulguero9no },
    { periodo: 'Décimo', concepto: 'Ahorro', valor: usuario.Ahorro10mo },
    { periodo: 'Décimo', concepto: 'Pulguero', valor: usuario.Pulguero10mo },
    { periodo: '1ro Bach.', concepto: 'Ahorro', valor: usuario.Ahorro1roBach },
    { periodo: '1ro Bach.', concepto: 'Pulguero', valor: usuario.Pulguero1roBach },
    { periodo: 'Otros', concepto: 'Intereses ganados', valor: usuario.IntGanAhorros20222023 },
  ];

  const totalAhorros = ahorros.reduce((acc, a) => {
    const valor = typeof a.valor === 'number' ? a.valor : parseFloat(a.valor?.toString().replace(/[^\d.-]/g, '') || '0');
    return acc + (isNaN(valor) ? 0 : valor);
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

      {/* Cuotas */}
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

      {/* Ahorros */}
      <h3>Ahorro Personal</h3>
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
              <td>{formatMonto(a.valor)}</td>
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
