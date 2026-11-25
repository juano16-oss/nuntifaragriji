/* Banner de cookie-uri + pixel Meta. Pixelul se încarcă DOAR dacă apeși „Accept”.
   Cât timp PIXEL_ID e gol, nu apare nimic. Pentru a activa: pune numărul pixelului (16 cifre). */
(function(){
  var PIXEL_ID = '';
  if(!PIXEL_ID) return;
  var box=document.createElement('div');
  box.id='ck';box.hidden=true;
  box.style.cssText='position:fixed;left:12px;right:12px;bottom:12px;max-width:560px;margin:0 auto;background:#fff;color:#3B2A22;border-radius:12px;box-shadow:0 6px 24px rgba(0,0,0,.18);padding:16px;font-size:15px;line-height:1.45;z-index:99';
  box.innerHTML='<p style="margin:0 0 12px">Folosim cookie-uri ca să vedem ce reclame aduc vizite (pixelul Meta). Le pornim doar dacă ești de acord. <a href="confidentialitate.html" style="color:#C0704F">Detalii</a></p><div style="display:flex;gap:10px"><button id="ck-no" style="flex:1;padding:10px;border:1px solid #3B2A22;background:#fff;color:#3B2A22;border-radius:8px;font:inherit;cursor:pointer">Refuz</button><button id="ck-yes" style="flex:1;padding:10px;border:1px solid #C0704F;background:#C0704F;color:#fff;border-radius:8px;font:inherit;cursor:pointer">Accept</button></div>';
  document.body.appendChild(box);
  function get(){try{return localStorage.getItem('ck')}catch(e){return null}}
  function set(v){try{localStorage.setItem('ck',v)}catch(e){}}
  function pixel(){
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
    fbq('init',PIXEL_ID);fbq('track','PageView');
  }
  var c=get();
  if(c==='yes') pixel(); else if(c!=='no') box.hidden=false;
  document.getElementById('ck-yes').onclick=function(){set('yes');box.hidden=true;pixel();};
  document.getElementById('ck-no').onclick=function(){set('no');box.hidden=true;};
  var o=document.getElementById('ck-open');
  if(o) o.onclick=function(e){e.preventDefault();box.hidden=false;};
})();
