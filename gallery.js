// ==== carousel foto (geser otomatis) ====
const photos = document.querySelectorAll('.carousel-photo');
const dotsWrap = document.getElementById('carousel-dots');
let photoIndex = 0;

// bikin titik penanda sejumlah foto
photos.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dotsWrap.appendChild(dot);
});
const dots = dotsWrap.querySelectorAll('span');

photos[0].classList.add('active');

function nextPhoto() {
  const next = (photoIndex + 1) % photos.length;

  photos[photoIndex].classList.remove('active');
  photos[photoIndex].classList.add('leaving');
  photos[next].classList.add('active');

  dots[photoIndex].classList.remove('active');
  dots[next].classList.add('active');

  setTimeout(() => {
    photos[photoIndex].classList.remove('leaving');
  }, 500);

  photoIndex = next;
}

if (photos.length > 1) {
  setInterval(nextPhoto, 3000); // ganti foto tiap 3 detik
}

// ==== navigasi antar halaman ====
document.getElementById('prev-page').addEventListener('click', () => {
  window.location.href = 'our-story.html';
});

document.getElementById('next-page').addEventListener('click', () => {
  window.location.href = 'letter.html';
});