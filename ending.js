    document.getElementById('btn-menu').addEventListener('click', () => {
  // Animasi kecil sebelum pindah (opsional)
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    window.location.href = 'cover.html';
  }, 500);
});