// Titik-titik path (dalam satuan viewBox 412 x 845, sama dengan persentase posisi kotak)
const edgePaths = {
  'edge-start-2': 'M206.2,251.1 L206.2,259.6 L118,259.6 L118,268.1',
  'edge-start-3': 'M206.2,251.1 L206.2,259.6 L289.75,259.6 L289.75,268.1',
  'edge-2-4':     'M118,345.25 L118,366.6',
  'edge-3-5':     'M289.75,345.25 L289.75,366.6',
  'edge-4-6':     'M118,443.75 L118,473.2',
  'edge-5-7':     'M289.75,443.75 L289.75,473.2',
  'edge-6-8':     'M118,550.35 L118,555.9 L203.75,555.9 L203.75,561.5',
  'edge-7-8':     'M289.75,550.35 L289.75,555.9 L203.75,555.9 L203.75,561.5',
  'edge-8-end':   'M203.75,638.65 L203.97,649.8',
};

// panah yang muncul ketika kotak dengan id ini diklik
const incomingEdges = {
  '2': ['edge-start-2'],
  '3': ['edge-start-3'],
  '4': ['edge-2-4'],
  '5': ['edge-3-5'],
  '6': ['edge-4-6'],
  '7': ['edge-5-7'],
  '8': ['edge-6-8', 'edge-7-8', 'edge-8-end'],
};

// gambar path ke elemen svg
Object.entries(edgePaths).forEach(([id, d]) => {
  const el = document.getElementById(id);
  if (el) el.setAttribute('d', d);
});

document.querySelectorAll('.story-box').forEach((box) => {
  box.addEventListener('click', () => {
    if (box.classList.contains('revealed')) return;

    box.classList.add('revealed', 'just-revealed');
    setTimeout(() => box.classList.remove('just-revealed'), 700);

    const num = box.dataset.box;
    (incomingEdges[num] || []).forEach((edgeId) => {
      const edge = document.getElementById(edgeId);
      if (edge) edge.classList.add('show');
    });
  });
});

document.getElementById('prev-page').addEventListener('click', () => {
  window.location.href = 'opening.html';
});

document.getElementById('next-page').addEventListener('click', () => {
  window.location.href = 'gallery.html';
});
