document.addEventListener('DOMContentLoaded', () => {
  //for typing effects...
  const typed = new Typed('#typed-text', {
    strings: ['Building · Learning · Creating', 'Code. Collaborate. Contribute.', 'Web · Projects · Community'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    loop: true
  });

  //for scrolling...
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.hash !== '') {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
