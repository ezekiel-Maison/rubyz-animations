// bounce-text.js
document.addEventListener('DOMContentLoaded', () => {
  const h1 = document.querySelector('.headline');
  if (!h1) return; // skip if no headline on this page
  const text = h1.textContent;
  h1.innerHTML = text
    .split('')
    .map(ch => ch === ' ' ? "<span class='char'>&nbsp;</span>" : `<span class='char'>${ch}</span>`)
    .join('');
  gsap.from('.char', { opacity:0, x:60, duration:0.7, ease:'bounce.out', stagger:0.05 });
});
