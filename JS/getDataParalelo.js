const paralelo = "A";
const url = `https://script.google.com/macros/s/AKfycbwPne_dVdH9rSXdcZzPPfdD6Oxn3ONUt3Ku_NR6tJdQWn6WE4TYt2wqmtfOXdzqvXjI/exec?paralelo=${encodeURIComponent(paralelo)}`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log("Resumen paralelo:", data);
        document.getElementById("reporte").innerHTML = `
        <h3>Paralelo ${paralelo}</h3>
        <p><strong>Total estudiantes:</strong> ${data.estudiantes}</p>
        <p><strong>Total saldo final:</strong> $${data.totalSaldoFinal}</p>
        <p><strong>Total deuda:</strong> $${data.totalDeuda}</p>
        `;
    })
    .catch(err => console.error("Error:", err));
