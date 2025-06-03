function iniciarSesion() {
        const cedula = document.getElementById("cedula").value.trim();
        const pin = document.getElementById("pin").value.trim();
        const resultado = document.getElementById("login-resultado");
        resultado.textContent = "";

        if (!cedula || !pin) {
            resultado.textContent = "Por favor, ingresa tu cédula y PIN.";
            return;
        }

        // API a ocultar
        const url = `https://script.google.com/macros/s/AKfycbz1NFlruXf3drBc6qiLvks_FXuYro7PAA0rq2_G_fRpVOH8C1xBWbkBe8NDYPJud-krXg/exec?cedula=${encodeURIComponent(cedula)}&pin=${encodeURIComponent(pin)}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
            if (data.error) {
                resultado.textContent = data.error;
                return;
            }
            // Guardar datos relevantes en localStorage si lo necesitas
            // localStorage.setItem('nombre', data.Nombres);
            // localStorage.setItem('paralelo', data.Paralelo);

            // Oculta login y muestra el contenido principal
            document.getElementById("login-section").style.display = "none";
            document.getElementById("main-content").style.display = "block";

            // Actualiza los datos en la página
            document.querySelector('.main-info__perfil-nombre').textContent = `${data.Nombres} ${data.Apellidos}`;
            document.querySelector('.main-info__perfil-paralelo').textContent = data.Paralelo || '';
            document.querySelector('.resumen__item--ahorro p').textContent = `${data.SaldoFinal || 0} $`;
            document.querySelector('.resumen__item--deuda p').textContent = `${data.Deuda || 0} $`;
            // Puedes seguir actualizando más campos según tu estructura de datos
            })
            .catch(err => {
            resultado.textContent = "Error al conectar con el servidor";
            });
        }