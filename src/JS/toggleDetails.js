function toggleDetalle(id) {
  const el = document.getElementById(id);
  el.classList.toggle('hidden');
}

// Cierra el modal si haces clic fuera del contenido
document.addEventListener('click', function(event) {
  const modales = document.querySelectorAll('.modal');

  modales.forEach(modal => {
    if (!modal.classList.contains('hidden') && event.target === modal) {
      modal.classList.add('hidden');
    }
  });
});
