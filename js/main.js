
(function(){
var h=document.querySelector('.hero'); if(!h) return;
var s=h.querySelectorAll('.slide'),d=h.querySelector('.dots'),al=h.querySelector('.ar.l'),ar=h.querySelector('.ar.r');
if(!s.length||!d||!al||!ar) return;
var i=0,t,paused=false;
s.forEach(function(_,k){var b=document.createElement('button');b.setAttribute('aria-label','Go to slide '+(k+1));b.onclick=function(){go(k);};d.appendChild(b);});
function go(n){var o=s[i];o.classList.remove('on');o.classList.add('out');setTimeout(function(){o.classList.remove('out');},600);i=(n+s.length)%s.length;s[i].classList.add('on');[].forEach.call(d.children,function(b,k){b.classList.toggle('on',k===i);});reset();}
function reset(){clearInterval(t);t=setInterval(function(){if(!paused)go(i+1);},5000);}
al.onclick=function(){go(i-1);};
ar.onclick=function(){go(i+1);};
h.addEventListener('mouseenter',function(){paused=true;});h.addEventListener('mouseleave',function(){paused=false;});
if(d.children[0]) d.children[0].classList.add('on'); reset();
})();



(function(){
var nv=document.querySelector('nav'); if(nv) addEventListener('scroll',function(){nv.classList.toggle('sc',scrollY>10);},{passive:true});
var els=[].slice.call(document.querySelectorAll('section h2,.stat,.cta,.quote,.card,details,footer .cols>div'));
if(!els.length||!('IntersectionObserver' in window)){return;}
els.forEach(function(e){e.classList.add('rv');var p=e.parentNode,idx=p?[].indexOf.call(p.children,e):0;e.style.transitionDelay=(idx%4)*0.12+'s';});
var io=new IntersectionObserver(function(a){a.forEach(function(x){if(!x.isIntersecting)return;var e=x.target;io.unobserve(e);e.classList.add('in');if(e.tagName==='H2')e.classList.add('go');setTimeout(function(){e.classList.remove('rv','in');e.style.transitionDelay='';},1300);});},{threshold:.15});
els.forEach(function(e){io.observe(e);});
})();



(function(){
var nv=document.querySelector('nav'); if(!nv) return;
var b=nv.querySelector('.mm-t:not(.cm-t):not(.ch-t):not(.pr-t)'),m=document.getElementById('mega'),ct; if(!b||!m) return;
function closeOthers(){[['.pr-t','pmega'],['.cm-t','cmega'],['.ch-t','chmega']].forEach(function(o){var mm=document.getElementById(o[1]),bb=nv.querySelector(o[0]); if(mm) mm.classList.remove('open'); if(bb) bb.setAttribute('aria-expanded','false');});}
function set(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o); if(o) closeOthers();}
b.addEventListener('click',function(e){e.stopPropagation();set(matchMedia('(hover:hover)').matches?true:!m.classList.contains('open'));});
var fine=matchMedia('(hover:hover)').matches;
if(fine){b.addEventListener('mouseenter',function(){clearTimeout(ct);set(true);});nv.addEventListener('mouseleave',function(){ct=setTimeout(function(){set(false);},200);});nv.addEventListener('mouseenter',function(){clearTimeout(ct);});}
document.addEventListener('click',function(e){if(!nv.contains(e.target))set(false);});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){set(false);b.focus();}});
})();



(function(){
var pg=document.getElementById('pg'),up=document.createElement('button');up.className='up';up.setAttribute('aria-label','Back to top');up.textContent='↑';document.body.appendChild(up);up.onclick=function(){scrollTo({top:0,behavior:'smooth'});};
addEventListener('scroll',function(){if(pg){var h=document.documentElement,den=(h.scrollHeight-innerHeight)||1,p=scrollY/den;pg.style.width=(p*100)+'%';}up.classList.toggle('show',scrollY>500);},{passive:true});
document.querySelectorAll('.mock').forEach(function(m){if(m.querySelector('.chip')) return;['GST ✓','Invoice sent','Stock updated'].forEach(function(t,j){var c=document.createElement('span');c.className='chip c'+(j+1);c.textContent=t;m.appendChild(c);});});
var hw=document.querySelector('.hero');
if(hw){hw.addEventListener('mousemove',function(e){var r=hw.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5;hw.style.setProperty('--ry',(x*14)+'deg');hw.style.setProperty('--tx',(x*-14)+'px');});hw.addEventListener('mouseleave',function(){hw.style.setProperty('--ry','0deg');hw.style.setProperty('--tx','0px');});}
document.querySelectorAll('.fc').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');});});
var d=document.querySelector('.dash');if(d){if('IntersectionObserver' in window){new IntersectionObserver(function(a,o){if(a[0].isIntersecting){d.classList.add('live');o.disconnect();}},{threshold:.3}).observe(d);}else{d.classList.add('live');}}
})();



(function(){
var nv=document.querySelector('nav'); if(!nv) return;
var b=nv.querySelector('.cm-t'),m=document.getElementById('cmega'),ct;
if(!b||!m) return;
function closeOthers(){[['.mm-t:not(.cm-t):not(.ch-t):not(.pr-t)','mega'],['.pr-t','pmega'],['.ch-t','chmega']].forEach(function(o){var mm=document.getElementById(o[1]),bb=nv.querySelector(o[0]); if(mm) mm.classList.remove('open'); if(bb) bb.setAttribute('aria-expanded','false');});}
function set(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o); if(o) closeOthers();}
b.addEventListener('click',function(e){e.stopPropagation();set(matchMedia('(hover:hover)').matches?true:!m.classList.contains('open'));});
if(matchMedia('(hover:hover)').matches){b.addEventListener('mouseenter',function(){clearTimeout(ct);set(true);});nv.addEventListener('mouseleave',function(){ct=setTimeout(function(){set(false);},200);});nv.addEventListener('mouseenter',function(){clearTimeout(ct);});}
document.addEventListener('click',function(e){if(!nv.contains(e.target))set(false);});document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
})();



(function(){
var nv=document.querySelector('nav'); if(!nv) return;
var b=nv.querySelector('.ch-t'),m=document.getElementById('chmega'),ct;
if(!b||!m) return;
var others=[{btn:nv.querySelector('.mm-t:not(.cm-t):not(.ch-t):not(.pr-t)'),id:'mega'},{btn:nv.querySelector('.pr-t'),id:'pmega'},{btn:nv.querySelector('.cm-t'),id:'cmega'}];
function closeOthers(){others.forEach(function(o){var el=document.getElementById(o.id);if(el)el.classList.remove('open');if(o.btn)o.btn.setAttribute('aria-expanded','false');});}
function set(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o);if(o)closeOthers();}
b.addEventListener('click',function(e){e.stopPropagation();set(matchMedia('(hover:hover)').matches?true:!m.classList.contains('open'));});
if(matchMedia('(hover:hover)').matches){b.addEventListener('mouseenter',function(){clearTimeout(ct);set(true);});nv.addEventListener('mouseleave',function(){ct=setTimeout(function(){set(false);},200);});nv.addEventListener('mouseenter',function(){clearTimeout(ct);});}
others.forEach(function(o){if(!o.btn)return;o.btn.addEventListener('mouseenter',function(){set(false);});o.btn.addEventListener('click',function(){set(false);});});
document.addEventListener('click',function(e){if(!nv.contains(e.target))set(false);});document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false);});
})();

(function(){
var nv=document.querySelector('nav'); if(!nv) return;
var b=nv.querySelector('.pr-t'),m=document.getElementById('pmega'),ct; if(!b||!m) return;
function closeOthers(){[['.mm-t:not(.cm-t):not(.ch-t):not(.pr-t)','mega'],['.cm-t','cmega'],['.ch-t','chmega']].forEach(function(o){var mm=document.getElementById(o[1]),bb=nv.querySelector(o[0]); if(mm) mm.classList.remove('open'); if(bb) bb.setAttribute('aria-expanded','false');});}
function set(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o); if(o) closeOthers();}
b.addEventListener('click',function(e){e.stopPropagation();set(matchMedia('(hover:hover)').matches?true:!m.classList.contains('open'));});
if(matchMedia('(hover:hover)').matches){b.addEventListener('mouseenter',function(){clearTimeout(ct);set(true);});nv.addEventListener('mouseleave',function(){ct=setTimeout(function(){set(false);},200);});nv.addEventListener('mouseenter',function(){clearTimeout(ct);});}
document.addEventListener('click',function(e){if(!nv.contains(e.target))set(false);});document.addEventListener('keydown',function(e){if(e.key==='Escape'){set(false);b.focus();}});
})();
(function(){
  var DEMO_USERS = [
    { netId:'demo@doterp', password:'Demo@123', name:'Demo User', company:'Demo Enterprises', serial:'DOT-2026-001245', licenseKey:'DERP-GOLD-9X4K-72QM-PL8A', edition:'DotERP Gold', product:'DotERP', plan:'Yearly Subscription', users:'5 Users', activatedOn:'12 Apr 2026', validTill:'12 Apr 2027', status:'Active', email:'demo@doterp.com', mobile:'+91 98765 43210' },
    { netId:'admin@doterp', password:'Admin@123', name:'Admin User', company:'DotERP Solutions Pvt. Ltd.', serial:'DOT-2026-009901', licenseKey:'DERP-SILVER-4M2N-81QZ-TT5C', edition:'DotERP Silver', product:'DotERP', plan:'Monthly Subscription', users:'2 Users', activatedOn:'01 Jan 2026', validTill:'01 Dec 2026', status:'Active', email:'admin@doterp.com', mobile:'+91 90000 11111' }
  ];
  var KEY_SESSION='doterp_session', KEY_REMEMBER='doterp_remember', KEY_ID='doterp_saved_id';

  function inPages(){ return /\/pages\//i.test(location.pathname.replace(/\\/g,'/')); }
  function basePath(){ return inPages() ? '' : 'pages/'; }
  function dashUrl(){ return basePath() + 'dashboard.html'; }
  function parseJSON(s,fb){ try{ return JSON.parse(s); }catch(e){ return fb; } }
  function getSession(){ return parseJSON(sessionStorage.getItem(KEY_SESSION)||localStorage.getItem(KEY_SESSION)||'null', null); }
  function setSession(user, remember){ var data={netId:user.netId, loginAt:Date.now()}; sessionStorage.setItem(KEY_SESSION, JSON.stringify(data)); if(remember){ localStorage.setItem(KEY_SESSION, JSON.stringify(data)); } else { localStorage.removeItem(KEY_SESSION); } }
  function clearSession(){ sessionStorage.removeItem(KEY_SESSION); localStorage.removeItem(KEY_SESSION); }
  function findUser(netId, pass){
    var id=(netId||'').trim().toLowerCase(), p=(pass||'').trim();
    for(var i=0;i<DEMO_USERS.length;i++){ if((DEMO_USERS[i].netId||'').toLowerCase()===id && DEMO_USERS[i].password===p) return DEMO_USERS[i]; }
    return null;
  }
  function currentUser(){
    var s=getSession(); if(!s||!s.netId) return null;
    for(var i=0;i<DEMO_USERS.length;i++){ if((DEMO_USERS[i].netId||'').toLowerCase()===(s.netId||'').toLowerCase()) return DEMO_USERS[i]; }
    return null;
  }
  function isLoggedIn(){ return !!getSession(); }

  function ensureStyles(){
    if(document.getElementById('doterp-login-style')) return;
    var css = ''
      + '.dlogin-overlay{position:fixed;inset:0;background:rgba(12,28,46,.55);backdrop-filter:blur(2px);display:none;align-items:center;justify-content:center;z-index:10000;padding:18px}'
      + '.dlogin-overlay.open{display:flex}'
      + '.dlogin-modal{width:100%;max-width:420px;background:#fff;color:#14243a;border-radius:12px;box-shadow:0 24px 60px rgba(0,0,0,.28);overflow:hidden;font-family:\'Plus Jakarta Sans\',system-ui,Segoe UI,Arial,sans-serif}'
      + '.dlogin-head{background:#0f4c81;color:#fff;padding:18px 20px;display:flex;align-items:center;justify-content:space-between}'
      + '.dlogin-head h3{margin:0;font-size:22px;letter-spacing:.5px}'
      + '.dlogin-close{background:transparent;border:0;color:#fff;font-size:22px;cursor:pointer;line-height:1;padding:4px 8px;border-radius:6px}'
      + '.dlogin-body{padding:20px}'
      + '.dlogin-field{margin-bottom:14px}'
      + '.dlogin-field label{display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:#334155}'
      + '.dlogin-field input[type=text],.dlogin-field input[type=password]{width:100%;padding:11px 12px;border:1px solid #c9d8e8;border-radius:8px;font:inherit;outline:none}'
      + '.dlogin-field input:focus{border-color:#0f6fb8;box-shadow:0 0 0 3px rgba(15,111,184,.12)}'
      + '.dlogin-row{display:flex;align-items:center;justify-content:space-between;gap:10px;margin:6px 0 14px;font-size:13px}'
      + '.dlogin-row label{display:flex;align-items:center;gap:8px;cursor:pointer;color:#334155}'
      + '.dlogin-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:8px}'
      + '.dlogin-btn{appearance:none;border:0;border-radius:8px;padding:11px 14px;font:inherit;font-weight:700;cursor:pointer}'
      + '.dlogin-btn.primary{background:#f59e0b;color:#2a1a00}'
      + '.dlogin-btn.secondary{background:#eaf2f8;color:#0f4c81}'
      + '.dlogin-links{display:flex;justify-content:space-between;gap:10px;margin-top:12px;font-size:13px}'
      + '.dlogin-links a{color:#0f6fb8;text-decoration:none;font-weight:600;cursor:pointer}'
      + '.dlogin-msg{margin-top:10px;font-size:13px;border-radius:8px;padding:10px 12px;display:none}'
      + '.dlogin-msg.show{display:block}'
      + '.dlogin-msg.err{background:#fff1f2;color:#9f1239;border:1px solid #fecdd3}'
      + '.dlogin-msg.ok{background:#ecfdf3;color:#166534;border:1px solid #86efac}'
      + '.dlogin-note{margin-top:14px;font-size:12px;color:#64748b;background:#f8fafc;border:1px dashed #cbd5e1;border-radius:8px;padding:10px}'
      + '.dlogin-reset{display:none;margin-top:12px;padding-top:12px;border-top:1px dashed #d7e3f0}'
      + '@media (prefers-color-scheme:dark){.dlogin-modal{background:#172a3d;color:#eef3f9}.dlogin-field label,.dlogin-row label{color:#d9e6f5}.dlogin-field input{background:#0f2233;color:#eef3f9;border-color:#2c4560}.dlogin-note{background:#102233;color:#a9b8ca;border-color:#2c4560}}'
    ;
    var st=document.createElement('style'); st.id='doterp-login-style'; st.textContent=css; document.head.appendChild(st);
  }

  function ensureModal(){
    if(document.getElementById('doterpLoginOverlay')) return document.getElementById('doterpLoginOverlay');
    ensureStyles();
    var ov=document.createElement('div'); ov.id='doterpLoginOverlay'; ov.className='dlogin-overlay'; ov.innerHTML=''
      + '<div class="dlogin-modal" role="dialog" aria-modal="true" aria-labelledby="dloginTitle">'
      + '  <div class="dlogin-head"><h3 id="dloginTitle">WELCOME!</h3><button type="button" class="dlogin-close" data-login-close aria-label="Close">×</button></div>'
      + '  <div class="dlogin-body">'
      + '    <form id="doterpLoginForm" autocomplete="on">'
      + '      <div class="dlogin-field"><label for="dloginId">Tally.NET ID</label><input id="dloginId" name="tallynetid" type="text" placeholder="Enter Tally.NET ID" required></div>'
      + '      <div class="dlogin-field"><label for="dloginPass">Password</label><input id="dloginPass" name="password" type="password" placeholder="Enter Password" required></div>'
      + '      <div class="dlogin-row"><label><input type="checkbox" id="dloginRemember"> Remember me</label><a id="dloginForgot" href="#">Forgot ID/Password?</a></div>'
      + '      <div class="dlogin-actions"><button type="submit" class="dlogin-btn primary">Log In</button><button type="button" class="dlogin-btn secondary" data-login-close>Close</button></div>'
      + '      <div class="dlogin-links"><a id="dloginResetLink" href="#">Reset Password</a><a href="'+dashUrl()+'" id="dloginDashLink" style="display:none">Go to Dashboard</a></div>'
      + '      <div id="dloginMsg" class="dlogin-msg"></div>'
      + '      <div id="dloginResetBox" class="dlogin-reset"><div class="dlogin-field"><label for="dloginResetId">Tally.NET ID</label><input id="dloginResetId" type="text" placeholder="Enter your Tally.NET ID"></div><div class="dlogin-field"><label for="dloginResetNew">New Password</label><input id="dloginResetNew" type="password" placeholder="Enter new password"></div><button type="button" class="dlogin-btn primary" id="dloginResetBtn" style="width:100%">Reset Password</button></div>'
      + '    </form>'
      + '    <div class="dlogin-note"><b>Demo login:</b> Tally.NET ID <code>demo@doterp</code> · Password <code>Demo@123</code></div>'
      + '  </div>'
      + '</div>';
    document.body.appendChild(ov);
    return ov;
  }

  function showMsg(text,type){ var el=document.getElementById('dloginMsg'); if(!el) return; el.textContent=text||''; el.className='dlogin-msg show '+(type||''); }
  function hideMsg(){ var el=document.getElementById('dloginMsg'); if(el){ el.className='dlogin-msg'; el.textContent=''; } }

  function openLogin(e){ if(e) e.preventDefault(); var ov=ensureModal(); ov.classList.add('open'); hideMsg();
    var saved = localStorage.getItem(KEY_ID)||''; var id=document.getElementById('dloginId'); var rem=document.getElementById('dloginRemember');
    if(id && !id.value) id.value=saved; if(rem) rem.checked=!!saved;
    if(isLoggedIn()){ var dl=document.getElementById('dloginDashLink'); if(dl){ dl.style.display='inline'; dl.href=dashUrl(); } showMsg('You are already logged in. You can open your dashboard.','ok'); }
    setTimeout(function(){ var f=document.getElementById(isLoggedIn()?'dloginDashLink':'dloginId'); if(f&&f.focus) f.focus(); }, 30);
  }
  function closeLogin(){ var ov=document.getElementById('doterpLoginOverlay'); if(ov) ov.classList.remove('open'); }

  function updateNav(){
    var logged=isLoggedIn();
    var links=document.querySelectorAll('a[href*="login.html"], a[data-login-link]');
    links.forEach(function(a){
      var txt=(a.textContent||'').trim().toLowerCase();
      if(txt==='log in' || a.hasAttribute('data-login-link')){
        a.textContent = logged ? 'Dashboard' : 'Log In';
        a.setAttribute('href', logged ? dashUrl() : (a.getAttribute('href')|| (basePath()+'login.html')));
      }
      if(!a.__dloginBound){
        a.__dloginBound=true;
        a.addEventListener('click', function(ev){
          if(isLoggedIn()){ ev.preventDefault(); location.href = dashUrl(); }
          else { ev.preventDefault(); openLogin(); }
        });
      }
    });
    var manage=document.querySelectorAll('.mng a.btn.w, a[href*="login.html"]');
    manage.forEach(function(a){
      if((a.textContent||'').indexOf('Manage my Subscriptions')>-1){
        a.setAttribute('href', logged ? dashUrl() : (basePath()+'login.html'));
      }
    });
  }

  function logout(){ clearSession(); updateNav(); }

  function bindModal(){
    var ov=ensureModal();
    if(ov.__bound) return; ov.__bound=true;
    ov.addEventListener('click', function(e){ if(e.target===ov || e.target.closest('[data-login-close]')){ e.preventDefault(); closeLogin(); } });
    document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeLogin(); });
    var form=document.getElementById('doterpLoginForm');
    if(form) form.addEventListener('submit', function(e){
      e.preventDefault(); hideMsg();
      var id=(document.getElementById('dloginId').value||'').trim();
      var pass=(document.getElementById('dloginPass').value||'').trim();
      var remember=!!(document.getElementById('dloginRemember')&&document.getElementById('dloginRemember').checked);
      var user=findUser(id,pass);
      if(!user){ showMsg('Invalid Tally.NET ID or Password. Please try again. (Demo: demo@doterp / Demo@123)','err'); return; }
      if(remember) localStorage.setItem(KEY_ID,id); else localStorage.removeItem(KEY_ID);
      setSession(user, remember);
      showMsg('Login successful. Redirecting to your dashboard...','ok');
      updateNav();
      setTimeout(function(){ location.href = dashUrl(); }, 500);
    });
    var forgot=document.getElementById('dloginForgot');
    if(forgot) forgot.addEventListener('click', function(e){ e.preventDefault(); showMsg('For ID/Password recovery, please contact support at support@doterp.example or use Reset Password below.','ok'); });
    var resetLink=document.getElementById('dloginResetLink');
    if(resetLink) resetLink.addEventListener('click', function(e){ e.preventDefault(); var box=document.getElementById('dloginResetBox'); if(box){ box.style.display = (box.style.display==='block'?'none':'block'); } hideMsg(); });
    var resetBtn=document.getElementById('dloginResetBtn');
    if(resetBtn) resetBtn.addEventListener('click', function(){
      var rid=(document.getElementById('dloginResetId').value||'').trim();
      var np=(document.getElementById('dloginResetNew').value||'').trim();
      if(!rid || !np){ showMsg('Please enter Tally.NET ID and a new password to reset.','err'); return; }
      showMsg('Password reset request submitted for '+rid+'. Please log in with your updated credentials (demo passwords cannot be permanently changed on this static site).','ok');
    });
  }

  window.DotERPAuth = {
    open: openLogin,
    close: closeLogin,
    logout: function(){ logout(); },
    isLoggedIn: isLoggedIn,
    getUser: currentUser,
    requireAuth: function(){ if(!isLoggedIn()){ openLogin(); setTimeout(function(){ if(!isLoggedIn()) location.href = basePath()+'login.html'; }, 300); return null; } return currentUser(); }
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
  function init(){ ensureStyles(); ensureModal(); bindModal(); updateNav();
    // if on login page and already logged in, go dashboard
    var path=(location.pathname||'').toLowerCase();
    if(/\/login\.html$/.test(path) && isLoggedIn()){ location.replace(dashUrl()); }
  }
})();
(function(){
  function initMobileNav(){
    var nav=document.querySelector('nav'); if(!nav) return;
    var wrap=nav.querySelector('.wrap'); if(!wrap) return;
    if(!wrap.querySelector('.nav-toggle')){
      var btn=document.createElement('button');
      btn.type='button'; btn.className='nav-toggle'; btn.setAttribute('aria-label','Open menu'); btn.setAttribute('aria-expanded','false');
      btn.innerHTML='<span></span>';
      // insert at start of wrap
      wrap.insertBefore(btn, wrap.firstChild);
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        var open = nav.classList.toggle('mob-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        if(!open){
          nav.querySelectorAll('.mega.open').forEach(function(m){ m.classList.remove('open'); });
          nav.querySelectorAll('[aria-expanded="true"].mm-t').forEach(function(b){ b.setAttribute('aria-expanded','false'); });
        }
      });
    }
    // close on outside click
    document.addEventListener('click', function(e){ if(!nav.contains(e.target) && nav.classList.contains('mob-open')){ nav.classList.remove('mob-open'); var t=nav.querySelector('.nav-toggle'); if(t){t.setAttribute('aria-expanded','false'); t.setAttribute('aria-label','Open menu');} nav.querySelectorAll('.mega.open').forEach(function(m){m.classList.remove('open');}); nav.querySelectorAll('[aria-expanded="true"].mm-t').forEach(function(b){b.setAttribute('aria-expanded','false');}); } });
    // close menu when navigating via regular links
    nav.querySelectorAll('a.links, .mega a').forEach(function(a){
      a.addEventListener('click', function(){
        if(nav.classList.contains('mob-open') && !a.classList.contains('mm-t')){
          setTimeout(function(){ nav.classList.remove('mob-open'); var t=nav.querySelector('.nav-toggle'); if(t){t.setAttribute('aria-expanded','false'); t.setAttribute('aria-label','Open menu');} }, 50);
        }
      });
    });
    // reset on resize up
    window.addEventListener('resize', function(){
      if(window.innerWidth > 980 && nav.classList.contains('mob-open')){
        nav.classList.remove('mob-open'); var t=nav.querySelector('.nav-toggle'); if(t){t.setAttribute('aria-expanded','false'); t.setAttribute('aria-label','Open menu');}
      }
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', initMobileNav); else initMobileNav();
})();
