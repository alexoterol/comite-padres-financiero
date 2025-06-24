import Modal from "./Modal";

type DetallesAhorro = {
  olimpíadas: number;
  nivel: number;
  voluntario: number;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  detalles: DetallesAhorro;
};

const ModalAhorro = ({ isOpen, onClose, detalles }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h4>Detalle de Aportes</h4>
      <p>Olimpíadas: ${detalles.olimpíadas.toFixed(2)}</p>
      <p>Nivel: ${detalles.nivel.toFixed(2)}</p>
      <p>Voluntario: ${detalles.voluntario.toFixed(2)}</p>
    </Modal>
  );
};

export default ModalAhorro;
