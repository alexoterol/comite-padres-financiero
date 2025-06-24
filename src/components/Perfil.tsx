type Props = {
  nombre: string;
  paralelo: string;
};

const Perfil = ({ nombre, paralelo }: Props) => {
  return (
    <section className="main-info__perfil">
      <h2 className="main-info__perfil-title">Estudiante:</h2>
      <p className="main-info__perfil-nombre">{nombre}</p>
      <div className="main-info__perfil-paralelo" id="paralelo_estudiante">{paralelo}</div>
    </section>
  );
};

export default Perfil;
