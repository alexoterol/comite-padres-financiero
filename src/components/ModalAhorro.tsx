import Modal from "./Modal";

type DetallesAhorro = {
  [periodo: string]: string | number; // Ej: { "8vo Básico": "$90.00", ... }
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  detalles: DetallesAhorro;
};

const ModalAhorro = ({ isOpen, onClose, detalles }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h4>Detalle de Ahorros por Nivel</h4>
      <ul>
        {Object.entries(detalles).map(([periodo, valor], i) => (
          <li key={i}>
            {periodo}: ${typeof valor === "string" ? valor : valor.toFixed(2)}
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default ModalAhorro;
