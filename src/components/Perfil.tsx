import type { Usuario } from "../types/Usuario";

type Props = {
  usuario: Usuario;
};

const Perfil = ({ usuario }: Props) => {
  return (
    <section className="main-info__perfil">
      <h2 className="main-info__perfil-title">Representado:</h2>
      <p className="main-info__perfil-nombre">
        {usuario.Nombres} {usuario.Apellidos}
      </p>

      <div className="main-info__perfil-detalles">
        <p><strong>Paralelo actual:</strong> {usuario.PAREN1roBACH}</p>
      </div>
    </section>
  );
};

export default Perfil;
