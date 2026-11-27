/* Pixel Meta + aviso de cookie-uri.
   Desde 27/11/2026 (pedido de Juani) el pixel carga SIEMPRE al entrar, sin esperar «Accept».
   Manda PageView y ViewContent al cargar, y «ClicComprar» al tocar el botón de compra.
   El cartel queda como aviso: «Refuz» apaga el pixel para esa persona (consent revoke). */
(function(){
  var PIXEL_ID = '2592381644561252';
  if(!PIXEL_ID) return;
  function get(){try{return localStorage.getItem('ck')}catch(e){return null}}
  function set(v){try{localStorage.setItem('ck',v)}catch(e){}}
  var c=get();

  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  if(c==='no') fbq('consent','revoke');
  fbq('init',PIXEL_ID);
  fbq('track','PageView');
  fbq('track','ViewContent',{content_name:'Planificatorul Nunții',currency:'RON',value:99});

  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href*="impultienda"]');
    if(a) fbq('trackCustom','ClicComprar');
  },true);

  function banner(){
    var box=document.createElement('div');
    box.id='ck';box.hidden=true;
    box.style.cssText='position:fixed;left:12px;right:12px;bottom:12px;max-width:560px;margin:0 auto;background:#fff;color:#3B2A22;border-radius:12px;box-shadow:0 6px 24px rgba(0,0,0,.18);padding:12px 14px;font-size:14px;line-height:1.4;z-index:99';
    box.innerHTML='<p style="margin:0 0 10px">Folosim cookie-uri (pixelul Meta) ca să vedem ce reclame aduc vizite. <a href="confidentialitate.html" style="color:#C0704F">Detalii</a></p><div style="display:flex;gap:10px"><button id="ck-no" style="flex:1;padding:8px;border:1px solid #3B2A22;background:#fff;color:#3B2A22;border-radius:8px;font:inherit;cursor:pointer">Refuz</button><button id="ck-yes" style="flex:1;padding:8px;border:1px solid #C0704F;background:#C0704F;color:#fff;border-radius:8px;font:inherit;cursor:pointer">OK</button></div>';
    document.body.appendChild(box);
    if(c!=='yes'&&c!=='no') box.hidden=false;
    document.getElementById('ck-yes').onclick=function(){set('yes');box.hidden=true;fbq('consent','grant');};
    document.getElementById('ck-no').onclick=function(){set('no');box.hidden=true;fbq('consent','revoke');};
    var o=document.getElementById('ck-open');
    if(o) o.onclick=function(ev){ev.preventDefault();box.hidden=false;};
  }
  if(document.body) banner(); else document.addEventListener('DOMContentLoaded',banner);
})();
