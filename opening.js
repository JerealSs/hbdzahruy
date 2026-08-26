const messages = [
  {
    el: document.getElementById('msg1-text'),
    text: 'Happy Birthday to my beloved yang ke-22, <3',
    speed: 45,
  },
  {
    el: document.getElementById('msg2-text'),
    text: 'Semoga kamu selalu diberikan kesehatan dan tambah juga cantiknya',
    speed: 35,
  },
  {
    el: document.getElementById('msg3-text'),
    text: 'Semoga kesayanganku mendapatkan hasil yang baik dari apa yang diusahakan',
    speed: 35,
  },
];

function typeMessage(msg, onDone) {
  const { el, text, speed } = msg;
  el.classList.add('typing');
  let i = 0;
  const tick = () => {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(tick, speed);
    } else {
      el.classList.remove('typing');
      onDone();
    }
  };
  tick();
}

function playSequence(list, index = 0) {
  if (index >= list.length) return;
  typeMessage(list[index], () => {
    setTimeout(() => playSequence(list, index + 1), 250);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // small delay so the page settles in before typing starts
  setTimeout(() => playSequence(messages), 400);
});

const nextBtn = document.getElementById('next-btn');
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    window.location.href = 'our-story.html';
  });
}
