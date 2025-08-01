import { useState } from "react";
import ModalAhorro from "./ModalAhorro";
import ModalDeuda from "./ModalDeuda";
import type { Usuario } from "../types/Usuario";

const Resumen = ({ usuario }: { usuario: Usuario }) => {
  const [mostrarAhorro, setMostrarAhorro] = useState(false);
  const [mostrarDeuda, setMostrarDeuda] = useState(false);

  // Utilidad para formatear montos
  const formatMonto = (valor: string | number | undefined) => {
    const num = typeof valor === "string" ? parseFloat(valor.replace(/[^\d.-]/g, "")) : valor;
    const safeNum = typeof num === "number" ? num : 0;
    return isNaN(safeNum) ? "$0.00" : `$${safeNum.toFixed(2)}`;
  };

  // Aporte total = saldo final del ciclo actual
  const saldo = usuario.SaldoFinal20242025;

  // Detalles de ahorro por nivel
  const detallesAhorro = {
    olimpíadas: 25,
    nivel:
      (parseFloat((usuario.Ahorro8vo ?? "0").toString()) || 0) +
      (parseFloat((usuario.Ahorro9no ?? "0").toString()) || 0) +
      (parseFloat((usuario.Ahorro10mo ?? "0").toString()) || 0) +
      (parseFloat((usuario.Ahorro1roBach ?? "0").toString()) || 0),
    voluntario:
      (parseFloat((usuario.Pulguero8voValor ?? "0").toString()) || 0) +
      (parseFloat((usuario.Pulguero9no ?? "0").toString()) || 0) +
      (parseFloat((usuario.Pulguero10mo ?? "0").toString()) || 0) +
      (parseFloat((usuario.Pulguero1roBach ?? "0").toString()) || 0),
  };

  // Simulación de deudas (puedes extraerlas dinámicamente si están en los datos)
  const detallesDeuda = [
    { nombre: "Promo 67", valor: 60 },
    { nombre: "Graduación", valor: 100 },
  ];

  const deuda = detallesDeuda.reduce((acc, d) => acc + d.valor, 0);

  return (
    <section className="resumen" id="recaudado">
      <div
        className="resumen__item resumen__item--ahorro"
        onClick={() => setMostrarAhorro(true)}
      >
        <h3>Aporte Total</h3>
        <p>{formatMonto(saldo)}</p>
      </div>

      <div
        className="resumen__item resumen__item--deuda"
        onClick={() => setMostrarDeuda(true)}
      >
        <h3>Deuda Total</h3>
        <p>{formatMonto(deuda)}</p>
      </div>

      <ModalAhorro
        isOpen={mostrarAhorro}
        onClose={() => setMostrarAhorro(false)}
        detalles={detallesAhorro}
      />

      <ModalDeuda
        isOpen={mostrarDeuda}
        onClose={() => setMostrarDeuda(false)}
        deudas={detallesDeuda}
      />
    </section>
  );
};

export default Resumen;
