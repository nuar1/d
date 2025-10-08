(function(){
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if(navToggle && navMenu){
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=>{
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded','false');
    }));
  }

  const yearEl = document.getElementById('year');
  if(yearEl){
    yearEl.textContent = new Date().getFullYear();
  }

  const accordion = document.querySelector('[data-accordion]');
  if(accordion){
    accordion.querySelectorAll('details > summary').forEach(summary => {
      summary.addEventListener('click', () => {
        const details = summary.parentElement;
        const wasOpen = details.open;
        requestAnimationFrame(() => {
          if(!wasOpen){
            accordion.querySelectorAll('details[open]').forEach(d => {
              if(d !== details) d.removeAttribute('open');
            });
          }
        });
      });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if(id && id.length > 1){
        const target = document.querySelector(id);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });
})();

