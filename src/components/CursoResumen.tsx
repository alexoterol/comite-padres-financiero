import { useEffect, useState } from "react";

type Props = {
  paralelo: string;
};

type ResumenParalelo = {
  paralelo: string;
  estudiantes: number;
  totalSaldoFinal: number;
  totalDeuda: number;
  error?: string;
};

const CursoResumen = ({ paralelo }: Props) => {
  const [resumen, setResumen] = useState<ResumenParalelo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.warn("No se recibió paralelo");
    if (!paralelo) return;

const url = `https://script.google.com/macros/s/AKfycbxBXRyc4Zz5OYjw3aA8UrYRCspZqfiYcMhupCs-1kL56eBg7lC5YyyIHXsrEZuTDji0Kw/exec?paralelo=${encodeURIComponent(paralelo)}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Prop paralelo:", paralelo);
        console.log("API data:", data);
        setResumen(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener resumen del paralelo:", err);
        setResumen({
          paralelo,
          estudiantes: 0,
          totalSaldoFinal: 0,
          totalDeuda: 0,
          error: "No se pudo obtener el resumen del curso.",
        });
        setLoading(false);
      });
  }, [paralelo]);

  if (loading) return <p>Cargando información del curso...</p>;
  if (resumen?.error) return <p style={{ color: "red" }}>{resumen.error}</p>;

  return (
    <section className="curso-general" id="curso">
      <h2 className="curso-general__title">Información del Curso</h2>
      <h3 className="curso-general__sub">
        Curso: <span>{resumen?.paralelo}</span>
      </h3>
      <div className="curso-general__resumen">
        <div className="curso-general__item curso-general__item--recaudado">
          <h3>Recaudado Total</h3>
          <p id="curso-recaudado">${resumen?.totalSaldoFinal.toFixed(2)}</p>
        </div>
        <div className="curso-general__item curso-general__item--deuda">
          <h3>Deuda Total</h3>
          <p id="curso-deuda">${resumen?.totalDeuda.toFixed(2)}</p>
        </div>
        <div className="curso-general__item curso-general__item--estudiantes">
          <h3>Estudiantes</h3>
          <p>{resumen?.estudiantes}</p>
        </div>
      </div>
    </section>
  );
};

export default CursoResumen;