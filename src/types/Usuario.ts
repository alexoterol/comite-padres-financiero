export type Usuario = {
  Usuario: string;
  Contraseña: string;
  Apellidos: string;
  Nombres: string;
  PAREN1roBACH: string; // "PAR. EN 1ro. BACH."

  Ahorro8vo: number;
  Pulguero8voNoPiezas: number;
  Pulguero8voValor?: number | null; // la clave vacía ""

  Saldo1raCom7mo: string | null;
  Saldofinal20222023: number;
  DevAlumnosquedejaronelcolegioen9no?: string | null; // Dev. Alumnos que dejaron el colegio en 9no.
  SaldoNETOfinal20222023: number;

  Ahorro9no: number;
  IntGanAhorros20222023: number;
  Pulguero9no: number;

  SaldoFinal20232024: number;
  DevAlumnosquedejaránelcolegioen10mo?: string | null;
  Interesesquepasanalfondocomun?: string | null;
  SaldoNETOfinal20232024: number;

  Ahorro10mo: number;
  IntGanAhorros20232024: number;
  Ventacomida10mo?: string | null;
  Pulguero10mo?: string | null;
  IntGanAh0209202431012025: number;

  SaldoFinal20242025: number;
  Ahorro1roBach: number;
  UsodelSaldoafavordel20242025?: string | null;
  IntGanAhorros20242025?: string | null;
  Pulguero1roBach?: string | null;
  Otrosingresos?: string | null;
  IntGanAh?: string | null;

  SaldoFinal20252026: number;
};
