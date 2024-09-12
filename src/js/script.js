document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in-section');
  
    function checkVisibility() {
      const windowHeight = window.innerHeight;
      const windowTop = window.scrollY;
      const windowBottom = windowTop + windowHeight;
  
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.offsetHeight;
  
        if (windowBottom > sectionTop && windowTop < sectionBottom) {
          section.classList.add('visible');
        }
      });
    }
  
    // Verifique a visibilidade inicialmente e durante o scroll
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);
  });