// ==== carousel foto (geser otomatis) ====
const photos = document.querySelectorAll('.carousel-photo');
const dotsWrap = document.getElementById('carousel-dots');
const captionText = document.getElementById('photo-caption'); // Elemen deskripsi baru
let photoIndex = 0;

// bikin titik penanda sejumlah foto
photos.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dotsWrap.appendChild(dot);
});
const dots = dotsWrap.querySelectorAll('span');

// Set foto dan deskripsi pertama saat halaman dimuat
photos[0].classList.add('active');
captionText.textContent = photos[0].getAttribute('data-caption');

function nextPhoto() {
  const next = (photoIndex + 1) % photos.length;

  // Fade out teks caption
  captionText.style.opacity = 0;

  photos[photoIndex].classList.remove('active');
  photos[photoIndex].classList.add('leaving');
  photos[next].classList.add('active');

  dots[photoIndex].classList.remove('active');
  dots[next].classList.add('active');

// ... kode di atasnya biarkan sama ...

  setTimeout(() => {
    photos[photoIndex].classList.remove('leaving');
    // Ubah teks dan fade in setelah transisi gambar setengah jalan
    captionText.textContent = photos[next].getAttribute('data-caption');
    captionText.style.opacity = 1;
  }, 500);

  photoIndex = next;
}

if (photos.length > 1) {
  setInterval(nextPhoto, 3500); // Waktu yang ideal: ganti foto tiap 3.5 detik
}

// ==== navigasi antar halaman ====
document.getElementById('prev-page').addEventListener('click', () => {
  window.location.href = 'our-story.html';
});

document.getElementById('next-page').addEventListener('click', () => {
  window.location.href = 'letter.html';
});