fetch("https://script.google.com/macros/s/AKfycbzlV_QRLa_GvfehGiFBj8-J59fjr-UlPj9vo3BPxFazYFwyR4mxJOHwm8SmsazvZlAxXg/exec")  // <-- tu URL aquí
      .then(response => response.json())
      .then(data => {
        const contenedor = document.getElementById("contenedor");
        data.forEach(row => {
          const div = document.createElement("div");
          div.className = "registro";
          div.innerHTML = `
            <p><strong>Nombre:</strong> ${row.Cedula}</p>
          `;
          contenedor.appendChild(div);
        });
      })
      .catch(error => {
        document.getElementById("contenedor").innerHTML = "<p>Error al cargar los datos.</p>";
        console.error("Error al obtener datos:", error);
      });