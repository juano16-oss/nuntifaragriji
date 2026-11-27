/* Pixel Meta + aviso de cookie-uri.
   Desde 27/11/2026 (pedido de Juani) el pixel carga SIEMPRE al entrar, sin esperar «Accept».
   Manda PageView y ViewContent al cargar, y «ClicComprar» al tocar el botón de compra.
   Aviso de cookies mínimo, sin rechazo: no influye en el pixel. */
(function(){
  var PIXEL_ID = '2592381644561252';
  if(!PIXEL_ID) return;
  function get(){try{return localStorage.getItem('ck')}catch(e){return null}}
  function set(v){try{localStorage.setItem('ck',v)}catch(e){}}
  var c=get();

  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init',PIXEL_ID);
  fbq('track','PageView');
  fbq('track','ViewContent',{content_name:'Planificatorul Nunții',currency:'RON',value:99});

  document.addEventListener('click',function(e){
    var a=e.target.closest&&e.target.closest('a[href*="impultienda"]');
    if(a) fbq('trackCustom','ClicComprar');
  },true);

  /* Aviso mínimo (27/11, Juani: «no quiero que se vea mas el cartel… que no influya en el seguimiento del pixel»).
     Una línea chica abajo, sin botón de rechazo: no cambia nada del pixel. Se cierra con «OK» y no vuelve. */
  function banner(){
    if(c==='ok') return;
    var box=document.createElement('div');
    box.style.cssText='position:fixed;left:0;right:0;bottom:0;background:rgba(59,42,34,.92);color:#fff;font-size:12px;line-height:1.3;padding:6px 10px;text-align:center;z-index:99';
    box.innerHTML='Site-ul folosește cookie-uri. <a href="confidentialitate.html" style="color:#F3D9CC">Detalii</a> <button style="margin-left:8px;padding:2px 10px;border:0;border-radius:6px;background:#C0704F;color:#fff;font:inherit;cursor:pointer">OK</button>';
    document.body.appendChild(box);
    box.querySelector('button').onclick=function(){set('ok');box.remove();};
  }
  if(document.body) banner(); else document.addEventListener('DOMContentLoaded',banner);
})();
