import Modal from "./Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  deudas: {
    nombre: string;
    valor: number;
  }[];
};

const ModalDeuda = ({ isOpen, onClose, deudas }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h4>Detalle de Deudas</h4>
      {deudas.map((deuda, idx) => (
        <div className="deuda-item" key={idx}>
          <p>{deuda.nombre}: <span>${deuda.valor.toFixed(2)}</span></p>
          <input type="file" accept=".pdf,.jpg,.png" />
        </div>
      ))}
    </Modal>
  );
};

export default ModalDeuda;
