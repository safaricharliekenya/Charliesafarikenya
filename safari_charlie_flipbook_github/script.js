const totalPages = 13;
let current = 1;
const img = document.getElementById('page');
const counter = document.getElementById('counter');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const flash = document.getElementById('flash');
let busy = false;

function updateUI(){
  counter.textContent = `${current} / ${totalPages}`;
  prev.disabled = current === 1;
  next.disabled = current === totalPages;
  img.alt = `Pagina ${current} della brochure`;
}

function goTo(page, direction){
  if (page < 1 || page > totalPages || page === current || busy) return;
  busy = true;
  img.classList.add(direction === 'next' ? 'turn-next' : 'turn-prev');
  setTimeout(() => {
    current = page;
    img.src = `pages/pagina-${current}.jpg`;
    img.classList.remove('turn-next','turn-prev');
    flash.classList.remove('show');
    void flash.offsetWidth;
    flash.classList.add('show');
    updateUI();
    busy = false;
  }, 220);
}

prev.addEventListener('click', () => goTo(current - 1, 'prev'));
next.addEventListener('click', () => goTo(current + 1, 'next'));

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') goTo(current + 1, 'next');
  if (e.key === 'ArrowLeft') goTo(current - 1, 'prev');
});

let startX = 0;
document.addEventListener('touchstart', e => { startX = e.changedTouches[0].clientX; }, {passive:true});
document.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 45) goTo(current + (dx < 0 ? 1 : -1), dx < 0 ? 'next' : 'prev');
}, {passive:true});

document.getElementById('fullscreen').addEventListener('click', async () => {
  try {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  } catch(e) {}
});

updateUI();
