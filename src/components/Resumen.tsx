import { useState } from "react";
import ModalAhorro from "./ModalAhorro";
import type { Usuario } from "../types/Usuario";

const Resumen = ({ usuario }: { usuario: Usuario }) => {
  const [mostrarAhorro, setMostrarAhorro] = useState(false);

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

  return (
    <section className="resumen" id="recaudado">
      <div
        className="resumen__item resumen__item--ahorro"
        onClick={() => setMostrarAhorro(true)}
      >
        <h3>Aporte Total</h3>
        <p>{formatMonto(saldo)}</p>
      </div>

      <ModalAhorro
        isOpen={mostrarAhorro}
        onClose={() => setMostrarAhorro(false)}
        detalles={detallesAhorro}
      />
    </section>
  );
};

export default Resumen;
