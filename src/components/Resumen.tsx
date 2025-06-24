import { useState } from "react";
import ModalAhorro from "./ModalAhorro";
import ModalDeuda from "./ModalDeuda";

type Props = {
  saldo: number;
  deuda: number;
};

const Resumen = ({ saldo, deuda }: Props) => {
  const [mostrarAhorro, setMostrarAhorro] = useState(false);
  const [mostrarDeuda, setMostrarDeuda] = useState(false);

  return (
    <section className="resumen" id="recaudado">
      <div
        className="resumen__item resumen__item--ahorro"
        onClick={() => setMostrarAhorro(true)}
      >
        <h3>Aporte Total</h3>
        <p>${saldo.toFixed(2)}</p>
      </div>

      <div
        className="resumen__item resumen__item--deuda"
        onClick={() => setMostrarDeuda(true)}
      >
        <h3>Deuda Total</h3>
        <p>${deuda.toFixed(2)}</p>
      </div>

      <ModalAhorro
        isOpen={mostrarAhorro}
        onClose={() => setMostrarAhorro(false)}
        detalles={{
          olimpíadas: 25,
          nivel: 60,
          voluntario: 0
        }}
      />

      <ModalDeuda
        isOpen={mostrarDeuda}
        onClose={() => setMostrarDeuda(false)}
        deudas={[
          { nombre: "Promo 67", valor: 60 },
          { nombre: "Graduación", valor: 100 }
        ]}
      />
    </section>
  );
};

export default Resumen;
