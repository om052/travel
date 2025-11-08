// contact.js — store submissions to localStorage + mobile toggle + year
(function(){
  document.getElementById('year5') && (document.getElementById('year5').textContent = new Date().getFullYear());

  // mobile nav
  const hamb = document.getElementById('hambContact');
  const nav = document.querySelector('.nav');
  hamb && hamb.addEventListener('click', ()=> {
    if(!nav) return; nav.style.display = nav.style.display === 'flex' ? '' : 'flex'; nav.style.flexDirection = 'column';
  });

  const form = document.getElementById('contactForm');
  const msg = document.getElementById('contactMsg');
  const clearBtn = document.getElementById('clearBtn');

  function show(text, ok=true){
    if(msg){ msg.textContent = text; msg.style.color = ok ? '#8fffbf' : '#ffd1d1'; }
    setTimeout(()=>{ if(msg) msg.textContent = ''; }, 4000);
  }

  form && form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());
    if(!data.name || !data.email){ show('Add name & email', false); return; }
    const subs = JSON.parse(localStorage.getItem('rvip_subs') || '[]');
    subs.push(Object.assign(data, {time: new Date().toISOString()}));
    localStorage.setItem('rvip_subs', JSON.stringify(subs));
    show('Thanks! Your enquiry has been received.');
    form.reset();
  });

  clearBtn && clearBtn.addEventListener('click', ()=> { form.reset(); show('Cleared', true); });
})();
