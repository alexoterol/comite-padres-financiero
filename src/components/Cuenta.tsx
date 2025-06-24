const Cuenta = () => {
  const datosCuenta = {
    banco: "Banco Guayaquil",
    numero: "2033924032",
    titular: "Nombre del Titular",
    tipo: "Ahorros",
  };

  const copiarDatos = () => {
    const texto = `
Banco: ${datosCuenta.banco}
Cuenta: ${datosCuenta.numero}
Titular: ${datosCuenta.titular}
Tipo: ${datosCuenta.tipo}
    `;
    navigator.clipboard.writeText(texto).then(() => {
      alert("Datos copiados al portapapeles.");
    });
  };

  return (
    <section className="cuenta" id="cuenta">
      <h2 className="cuenta__title">Datos de la Cuenta</h2>

      <div className="cuenta__info">
        <div className="cuenta__row">
          <span className="cuenta__icon">🏦</span>
          <div className="cuenta__text">
            <span className="cuenta__label">Banco</span>
            <span className="cuenta__value">{datosCuenta.banco}</span>
          </div>
        </div>

        <div className="cuenta__row">
          <span className="cuenta__icon">#️⃣</span>
          <div className="cuenta__text">
            <span className="cuenta__label">Cuenta</span>
            <span className="cuenta__value">{datosCuenta.numero}</span>
          </div>
        </div>

        <div className="cuenta__row">
          <span className="cuenta__icon">👤</span>
          <div className="cuenta__text">
            <span className="cuenta__label">Titular</span>
            <span className="cuenta__value">{datosCuenta.titular}</span>
          </div>
        </div>

        <div className="cuenta__row">
          <span className="cuenta__icon">💳</span>
          <div className="cuenta__text">
            <span className="cuenta__label">Tipo</span>
            <span className="cuenta__value">{datosCuenta.tipo}</span>
          </div>
        </div>
      </div>

      <button className="cuenta__cta" onClick={copiarDatos}>
        Copiar datos
      </button>
    </section>
  );
};

export default Cuenta;
