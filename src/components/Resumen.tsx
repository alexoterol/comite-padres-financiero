import { useState } from "react";

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

      {/* Modal Ahorros */}
      {mostrarAhorro && (
        <div className="modal" onClick={() => setMostrarAhorro(false)}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <h4>Detalle de Aportes</h4>
            <p>Item A: <span>$###</span></p>
            <button onClick={() => setMostrarAhorro(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal Deuda */}
      {mostrarDeuda && (
        <div className="modal" onClick={() => setMostrarDeuda(false)}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <h4>Detalle de Deudas</h4>
            <div className="deuda-item">
              <p>Deuda 1: <span>$50</span></p>
              <input type="file" accept=".pdf,.jpg,.png" />
            </div>
            <div className="deuda-item">
              <p>Deuda 2: <span>$75</span></p>
              <input type="file" accept=".pdf,.jpg,.png" />
            </div>
            <button onClick={() => setMostrarDeuda(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resumen;
