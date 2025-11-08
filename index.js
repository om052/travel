// index.js — basic interactions (hero subtle animation, menu toggle, year)
(function(){
  // year
  const year = document.getElementById('year'); if(year) year.textContent = new Date().getFullYear();

  // mobile menu
  const hamb = document.getElementById('hamb');
  const nav = document.getElementById('mainNav');
  hamb && hamb.addEventListener('click', ()=> {
    if(!nav) return;
    nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '0.6rem';
  });

  // small hero parallax on mousemove
  const hero = document.querySelector('.hero');
  if(hero){
    hero.addEventListener('mousemove', (e)=>{
      const x = (e.clientX - window.innerWidth/2) / 60;
      const y = (e.clientY - window.innerHeight/2) / 80;
      const img = document.querySelector('.card-hero img');
      if(img) img.style.transform = `translate(${x}px, ${y}px) scale(1.02)`;
    });
    hero.addEventListener('mouseleave', ()=>{
      const img = document.querySelector('.card-hero img');
      if(img) img.style.transform = '';
    });
  }
})();
