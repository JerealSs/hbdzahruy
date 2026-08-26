// ====== GANTI DI SINI ======
// Jawaban yang benar (boleh diisi angka saja, contoh tanggal jadian: "14022023")
// Sistem otomatis akan mengabaikan simbol "/", "-", spasi saat mengecek jawaban user.
const CORRECT_ANSWER = "050126";
// Halaman tujuan setelah password benar
const NEXT_PAGE = "opening.html";
// ============================

const screen = document.getElementById('password-screen');
const input = document.querySelector('.pw-input');
const startBtn = document.querySelector('.start-btn');
const errorEl = document.getElementById('pw-error');

function normalize(str) {
  return str.replace(/[^0-9]/g, '');
}

function checkPassword() {
  const guess = normalize(input.value);
  const answer = normalize(CORRECT_ANSWER);

  if (guess.length > 0 && guess === answer) {
    screen.classList.add('unlocked');
    errorEl.classList.remove('show');
    setTimeout(() => {
      window.location.href = NEXT_PAGE;
    }, 600);
  } else {
    errorEl.classList.add('show');
    input.focus();
    setTimeout(() => errorEl.classList.remove('show'), 1200);
  }
}

startBtn.addEventListener('click', checkPassword);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') checkPassword();
});
