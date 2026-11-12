/* ==========================================================
   DotERP website - main script
   Each block below does one job (marked with a comment).
   ========================================================== */

/* 1. Hero slider (auto-plays every 5 seconds) */
(function(){
var h=document.querySelector('.hero'),s=h.querySelectorAll('.slide'),d=h.querySelector('.dots'),i=0,t,paused=false;
s.forEach(function(_,k){var b=document.createElement('button');b.setAttribute('aria-label','Go to slide '+(k+1));b.onclick=function(){go(k);};d.appendChild(b);});
function go(n){var o=s[i];o.classList.remove('on');o.classList.add('out');setTimeout(function(){o.classList.remove('out');},600);i=(n+s.length)%s.length;s[i].classList.add('on');[].forEach.call(d.children,function(b,k){b.classList.toggle('on',k===i);});reset();}
function reset(){clearInterval(t);t=setInterval(function(){if(!paused)go(i+1);},5000);}
h.querySelector('.ar.l').onclick=function(){go(i-1);};
h.querySelector('.ar.r').onclick=function(){go(i+1);};
h.addEventListener('mouseenter',function(){paused=true;});h.addEventListener('mouseleave',function(){paused=false;});
d.children[0].classList.add('on');reset();
})();

/* 2. Menu shadow on scroll + fade-in of sections as they appear */
(function(){
var nv=document.querySelector('nav');addEventListener('scroll',function(){nv.classList.toggle('sc',scrollY>10);},{passive:true});
var els=[].slice.call(document.querySelectorAll('section h2,.stat,.cta,.quote,.card,details,footer .cols>div'));
if(!('IntersectionObserver' in window)){return;}
els.forEach(function(e){e.classList.add('rv');e.style.transitionDelay=([].indexOf.call(e.parentNode.children,e)%4)*0.12+'s';});
var io=new IntersectionObserver(function(a){a.forEach(function(x){if(!x.isIntersecting)return;var e=x.target;io.unobserve(e);e.classList.add('in');if(e.tagName==='H2')e.classList.add('go');setTimeout(function(){e.classList.remove('rv','in');e.style.transitionDelay='';},1300);});},{threshold:.15});
els.forEach(function(e){io.observe(e);});
})();

/* 3. "Products" mega menu (opens on hover or click, closes on Esc) */
(function(){
var nv=document.querySelector('nav'),b=nv.querySelector('.mm-t'),m=document.getElementById('mega'),ct;
function set(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o);}
b.addEventListener('click',function(e){e.stopPropagation();set(!m.classList.contains('open'));});
var fine=matchMedia('(hover:hover)').matches;
if(fine){b.addEventListener('mouseenter',function(){clearTimeout(ct);set(true);});nv.addEventListener('mouseleave',function(){ct=setTimeout(function(){set(false);},200);});nv.addEventListener('mouseenter',function(){clearTimeout(ct);});}
document.addEventListener('click',function(e){if(!nv.contains(e.target))set(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){set(false);b.focus();}});
})();

/* 4. Scroll progress bar, back-to-top button, floating chips,
      3D tilt on the hero card, glow on feature cards, animated dashboard bars */
(function(){
var pg=document.getElementById('pg'),up=document.createElement('button');up.className='up';up.setAttribute('aria-label','Back to top');up.textContent='↑';document.body.appendChild(up);up.onclick=function(){scrollTo({top:0,behavior:'smooth'});};
addEventListener('scroll',function(){var h=document.documentElement,p=scrollY/(h.scrollHeight-innerHeight);pg.style.width=(p*100)+'%';up.classList.toggle('show',scrollY>500);},{passive:true});
document.querySelectorAll('.mock').forEach(function(m){['GST ✓','Invoice sent','Stock updated'].forEach(function(t,j){var c=document.createElement('span');c.className='chip c'+(j+1);c.textContent=t;m.appendChild(c);});});
var hw=document.querySelector('.hero');hw.addEventListener('mousemove',function(e){var r=hw.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5;hw.style.setProperty('--ry',(x*14)+'deg');hw.style.setProperty('--tx',(x*-14)+'px');});hw.addEventListener('mouseleave',function(){hw.style.setProperty('--ry','0deg');hw.style.setProperty('--tx','0px');});
document.querySelectorAll('.fc').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');});});
var d=document.querySelector('.dash');if(d){if('IntersectionObserver' in window){new IntersectionObserver(function(a,o){if(a[0].isIntersecting){d.classList.add('live');o.disconnect();}},{threshold:.3}).observe(d);}else{d.classList.add('live');}}
})();
