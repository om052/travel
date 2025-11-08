// about.js — year + mobile toggle + simple counter animation
(function(){
  const y = document.getElementById('year2'); if(y) y.textContent = new Date().getFullYear();

  const hamb = document.getElementById('hambAbout');
  const nav = document.querySelector('.nav');
  hamb && hamb.addEventListener('click', ()=> {
    if(!nav) return;
    nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
    nav.style.flexDirection = 'column';
  });

  // animate stats (count up)
  function animateCount(el, to){
    let start=0, duration=1200, step = Math.ceil(to / (duration/30));
    const t = setInterval(()=>{
      start += step;
      if(start >= to){ el.textContent = to; clearInterval(t); } else el.textContent = start;
    },30);
  }
  document.querySelectorAll('.stat h3').forEach((h,i)=>{
    const values = [1100, 10, 24];
    setTimeout(()=> animateCount(h, values[i]), 400 + i*200);
  });
})();
