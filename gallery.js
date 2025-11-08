// gallery.js — year + lightbox + mobile menu
(function(){
  document.getElementById('year4') && (document.getElementById('year4').textContent = new Date().getFullYear());

  // mobile menu
  const hamb = document.getElementById('hambGallery');
  const nav = document.querySelector('.nav');
  hamb && hamb.addEventListener('click', ()=> {
    if(!nav) return; nav.style.display = nav.style.display === 'flex' ? '' : 'flex'; nav.style.flexDirection = 'column';
  });

  // lightbox
  const imgs = document.querySelectorAll('.masonry img');
  imgs.forEach(img => img.addEventListener('click', ()=>{
    const overlay = document.createElement('div');
    overlay.style.position='fixed'; overlay.style.inset=0; overlay.style.background='rgba(2,8,14,0.9)';
    overlay.style.display='flex'; overlay.style.alignItems='center'; overlay.style.justifyContent='center'; overlay.style.zIndex=9999;
    const big = document.createElement('img'); big.src = img.src; big.style.maxWidth='92%'; big.style.maxHeight='92%'; big.style.borderRadius='8px';
    overlay.appendChild(big);
    overlay.addEventListener('click', ()=> overlay.remove());
    document.body.appendChild(overlay);
  }));
})();
