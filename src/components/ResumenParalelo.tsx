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

function ResumenParalelo({ paralelo }: Props) {
  const [resumen, setResumen] = useState<ResumenParalelo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!paralelo) return;

    const url = `https://script.google.com/macros/s/TU_ID_SCRIPT/exec?paralelo=${encodeURIComponent(paralelo)}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setResumen(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al obtener resumen:", err);
        setResumen({ paralelo, estudiantes: 0, totalSaldoFinal: 0, totalDeuda: 0, error: "No se pudo obtener el resumen." });
        setLoading(false);
      });
  }, [paralelo]);

  if (loading) return <p>Cargando resumen de paralelo...</p>;
  if (resumen?.error) return <p style={{ color: "red" }}>{resumen.error}</p>;

  return (
    <div style={{ marginTop: "2rem" }}>
      <h3>Resumen del paralelo {resumen?.paralelo}</h3>
      <p><strong>Total estudiantes:</strong> {resumen?.estudiantes}</p>
      <p><strong>Total saldo final:</strong> ${resumen?.totalSaldoFinal.toFixed(2)}</p>
      <p><strong>Total deuda:</strong> ${resumen?.totalDeuda.toFixed(2)}</p>
    </div>
  );
}

export default ResumenParalelo;
