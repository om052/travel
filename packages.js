// packages.js — simple client-side search + basic mobile toggle
(function(){
  document.getElementById('year3') && (document.getElementById('year3').textContent = new Date().getFullYear());

  // mobile toggle (if hamburger present)
  const hamb = document.getElementById('hambPackages');
  const nav = document.querySelector('.nav');
  hamb && hamb.addEventListener('click', ()=> {
    if(!nav) return;
    nav.style.display = nav.style.display === 'flex' ? '' : 'flex'; nav.style.flexDirection = 'column';
  });

  // search packages
  const search = document.getElementById('search');
  const cards = Array.from(document.querySelectorAll('.card'));
  search && search.addEventListener('input', (e)=>{
    const q = e.target.value.toLowerCase().trim();
    cards.forEach(c=>{
      const name = (c.dataset.name || c.querySelector('h3').textContent).toLowerCase();
      c.style.display = name.includes(q) ? '' : 'none';
    });
  });

  // sort placeholder (no real price data here)
  const sort = document.getElementById('sort');
  sort && sort.addEventListener('change', (e)=>{
    if(e.target.value === 'price-low'){
      // naive: reverse order as "sorted"
      const parent = document.getElementById('cards');
      Array.from(cards).reverse().forEach(c=> parent.appendChild(c));
    }
  });
})();
