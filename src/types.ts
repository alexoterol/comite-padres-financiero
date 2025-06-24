// Representa un estudiante autenticado
export type Usuario = {
  Cedula: string;
  Nombres: string;
  Apellidos: string;
  Paralelo: string;
  SaldoFinal: number;
  Deuda: number;
};

// Representa el resumen de un paralelo (usado en CursoResumen)
export type ResumenParalelo = {
  paralelo: string;
  estudiantes: number;
  totalSaldoFinal: number;
  totalDeuda: number;
  error?: string;
};
