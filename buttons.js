const scroller = document.getElementById('scroller');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');

const scrollAmount = 512; // Adjusted to match your image width

nextBtn.addEventListener('click', () => {
  // 1. Smooth Scroll
  scroller.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  
  // 2. Fade Out/In Effect
  nextBtn.classList.add('fading');
  setTimeout(() => nextBtn.classList.remove('fading'), 500); // 500ms duration
});

backBtn.addEventListener('click', () => {
  scroller.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  
  backBtn.classList.add('fading');
  setTimeout(() => backBtn.classList.remove('fading'), 500);
});
