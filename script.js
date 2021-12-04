window.addEventListener('scroll', (e) => {
  const scrollY = window.scrollY;
  const wantedPoster = document.querySelector('.white-beard');
  wantedPoster.setAttribute('style', `
    clip-path: inset(0% ${Math.trunc(scrollY / 10)}% 0% 0%);
  `);
});