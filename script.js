const coverScreen = document.getElementById('cover');
const typedTextElement = document.getElementById('typed-text');

// Teks ucapan yang mau dimunculkan dengan efek ketik
const messageText = "Selamat Ulang Tahun Sayang, Zahra Nur Lestari";
let charIndex = 0;

function typeWriterCover() {
  if (charIndex < messageText.length) {
    typedTextElement.textContent += messageText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriterCover, 45); // Kecepatan ketik (milidetik)
  }
}

// Jalankan efek ketik saat halaman siap
window.addEventListener('DOMContentLoaded', () => {
  if (typedTextElement) {
    setTimeout(typeWriterCover, 600); // Jeda sedikit setelah animasi bubble pop muncul
  }
});

if (coverScreen) {
  coverScreen.style.cursor = 'pointer';
  coverScreen.addEventListener('click', () => {
    window.location.href = 'password.html';
  });
}