/* Ceremonia cookie consent banner + Google Consent Mode v2.
   Loaded synchronously BEFORE the Google tag so the default consent state
   is set before gtag('config') runs. Visitors can Accept all, Refuse all,
   or Customize (choose Analytics / Advertising separately) — the three
   options carry equal visual weight, per CNIL's recommended pattern.
   Both the initial 'default' call AND every reload/return visit read the
   stored per-category choice, so a returning visitor's consent (including
   ad_storage) is re-applied on every page load, not just the page where
   they clicked. */
(function(){
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments)}
  var KEY='cookie-consent';
  var stored=null;
  try{var raw=localStorage.getItem(KEY);stored=raw?JSON.parse(raw):null}catch(e){stored=null}
  var initA=stored&&stored.a==='granted'?'granted':'denied';
  var initD=stored&&stored.d==='granted'?'granted':'denied';
  gtag('consent','default',{
    ad_storage:initD,
    ad_user_data:initD,
    ad_personalization:initD,
    analytics_storage:initA,
    wait_for_update:stored?0:500
  });
  var T={
    en:{txt:'Some cookies are essential for the site to work (remembering your choice, your language). With your permission, others help us measure our audience and know whether our ads brought you here.',more:'Learn more',ok:'Accept all',no:'Refuse all',cust:'Customize',essT:'Essential',essD:'Needed for the site to work. Always on.',anaT:'Audience measurement',anaD:'Helps us understand how the site is used, so we can improve it (Google Analytics).',adsT:'Advertising',adsD:'Lets us tell whether our ads led you here, so we don’t waste our ad budget (Google Ads).',conf:'Confirm my choices'},
    fr:{txt:'Certains cookies sont indispensables au fonctionnement du site (mémoriser votre choix, votre langue). Avec votre accord, d’autres nous aident à mesurer notre audience et à savoir si nos publicités vous ont amené jusqu’ici.',more:'En savoir plus',ok:'Tout accepter',no:'Tout refuser',cust:'Personnaliser',essT:'Essentiels',essD:'Nécessaires au fonctionnement du site. Toujours actifs.',anaT:'Mesure d’audience',anaD:'Nous aide à comprendre comment le site est utilisé, pour l’améliorer (Google Analytics).',adsT:'Publicité',adsD:'Nous permet de savoir si nos publicités vous ont amené jusqu’ici, pour ne pas gaspiller notre budget pub (Google Ads).',conf:'Confirmer mes choix'},
    id:{txt:'Beberapa cookie penting agar situs berfungsi (mengingat pilihan Anda, bahasa Anda). Dengan izin Anda, cookie lain membantu kami mengukur pengunjung dan mengetahui apakah iklan kami membawa Anda ke sini.',more:'Selengkapnya',ok:'Terima semua',no:'Tolak semua',cust:'Sesuaikan',essT:'Esensial',essD:'Diperlukan agar situs berfungsi. Selalu aktif.',anaT:'Pengukuran pengunjung',anaD:'Membantu kami memahami cara situs digunakan, agar bisa kami tingkatkan (Google Analytics).',adsT:'Iklan',adsD:'Memungkinkan kami mengetahui apakah iklan kami membawa Anda ke sini, agar anggaran iklan tidak terbuang (Google Ads).',conf:'Konfirmasi pilihan saya'},
    es:{txt:'Algunas cookies son esenciales para que el sitio funcione (recordar tu elección, tu idioma). Con tu permiso, otras nos ayudan a medir nuestra audiencia y a saber si nuestros anuncios te trajeron aquí.',more:'Más información',ok:'Aceptar todo',no:'Rechazar todo',cust:'Personalizar',essT:'Esenciales',essD:'Necesarias para que el sitio funcione. Siempre activas.',anaT:'Medición de audiencia',anaD:'Nos ayuda a entender cómo se usa el sitio, para mejorarlo (Google Analytics).',adsT:'Publicidad',adsD:'Nos permite saber si nuestros anuncios te trajeron aquí, para no desperdiciar nuestro presupuesto publicitario (Google Ads).',conf:'Confirmar mis opciones'}
  };
  function apply(vals){
    try{localStorage.setItem(KEY,JSON.stringify(vals))}catch(e){}
    stored=vals;
    var a=vals.a==='granted'?'granted':'denied';
    var d=vals.d==='granted'?'granted':'denied';
    gtag('consent','update',{
      analytics_storage:a,
      ad_storage:d,
      ad_user_data:d,
      ad_personalization:d
    });
    var b=document.getElementById('ck-banner');
    if(b)b.remove();
  }
  function lang(){
    var l='en';
    try{l=localStorage.getItem('lang')||'en'}catch(e){}
    return T[l]?l:'en';
  }
  function ensureStyle(){
    if(document.getElementById('ck-style'))return;
    var css=document.createElement('style');
    css.id='ck-style';
    css.textContent='#ck-banner{position:fixed;left:16px;right:16px;bottom:16px;z-index:5000;max-width:520px;margin:0 auto;'
      +'background:linear-gradient(160deg,#1E2F50,#152440);border:1px solid rgba(240,227,215,.35);border-radius:14px;'
      +'box-shadow:0 22px 50px rgba(0,0,0,.55);padding:18px 20px;font-family:Poppins,sans-serif;animation:ckin .5s cubic-bezier(.16,1,.3,1)}'
      +'@keyframes ckin{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}'
      +'#ck-banner p{font-size:12px;font-weight:300;line-height:1.7;color:rgba(245,240,232,.75);margin:0 0 14px}'
      +'#ck-banner a{color:#f0e3d7;text-decoration:underline;text-underline-offset:3px}'
      +'#ck-banner .ck-row{display:flex;gap:10px;justify-content:flex-end;align-items:center;flex-wrap:wrap}'
      +'#ck-banner button{font-family:Poppins,sans-serif;font-size:10px;letter-spacing:.18em;text-transform:uppercase;cursor:pointer;padding:10px 20px;border-radius:6px;transition:all .25s}'
      +'#ck-banner .ck-btn{background:transparent;color:#f0e3d7;border:1px solid #f0e3d7;font-weight:600}'
      +'#ck-banner .ck-btn:hover{background:#f0e3d7;color:#12223d}'
      +'#ck-banner .ck-link{background:none;border:none;color:rgba(245,240,232,.6);text-decoration:underline;text-underline-offset:3px;margin-right:auto;padding:10px 0}'
      +'#ck-banner .ck-link:hover{color:#f0e3d7}'
      +'#ck-banner .ck-cat{display:flex;gap:12px;align-items:flex-start;margin:0 0 14px}'
      +'#ck-banner .ck-cat b{display:block;font-size:11px;letter-spacing:.06em;color:#f0e3d7;margin-bottom:2px}'
      +'#ck-banner .ck-cat span{display:block;font-size:11px;font-weight:300;line-height:1.6;color:rgba(245,240,232,.65)}'
      +'#ck-banner .ck-sw{position:relative;flex:0 0 auto;width:34px;height:20px;margin-top:2px}'
      +'#ck-banner .ck-sw input{position:absolute;opacity:0;inset:0;margin:0;cursor:pointer}'
      +'#ck-banner .ck-sw i{position:absolute;inset:0;background:rgba(245,240,232,.2);border-radius:20px;transition:background .2s;pointer-events:none}'
      +'#ck-banner .ck-sw i:before{content:"";position:absolute;left:2px;top:2px;width:16px;height:16px;border-radius:50%;background:#f0e3d7;transition:transform .2s}'
      +'#ck-banner .ck-sw input:checked+i{background:#8a6d4e}'
      +'#ck-banner .ck-sw input:checked+i:before{transform:translateX(14px)}'
      +'#ck-banner .ck-sw input:disabled+i{opacity:.5}';
    document.head.appendChild(css);
  }
  function renderChoice(){
    var s=T[lang()];
    var b=document.getElementById('ck-banner');
    b.innerHTML='<p>'+s.txt+' <a href="/privacy">'+s.more+'</a></p>'
      +'<div class="ck-row"><button id="ck-cust" class="ck-link" type="button">'+s.cust+'</button>'
      +'<button id="ck-decline" class="ck-btn" type="button">'+s.no+'</button>'
      +'<button id="ck-accept" class="ck-btn" type="button">'+s.ok+'</button></div>';
    document.getElementById('ck-accept').addEventListener('click',function(){apply({a:'granted',d:'granted'})});
    document.getElementById('ck-decline').addEventListener('click',function(){apply({a:'denied',d:'denied'})});
    document.getElementById('ck-cust').addEventListener('click',renderCustomize);
  }
  function renderCustomize(){
    var s=T[lang()];
    var b=document.getElementById('ck-banner');
    var curA=stored&&stored.a==='granted';
    var curD=stored&&stored.d==='granted';
    b.innerHTML='<div class="ck-cat"><span class="ck-sw"><input type="checkbox" checked disabled><i></i></span><div><b>'+s.essT+'</b><span>'+s.essD+'</span></div></div>'
      +'<div class="ck-cat"><span class="ck-sw"><input type="checkbox" id="ck-ana"'+(curA?' checked':'')+'><i></i></span><div><b>'+s.anaT+'</b><span>'+s.anaD+'</span></div></div>'
      +'<div class="ck-cat"><span class="ck-sw"><input type="checkbox" id="ck-ads"'+(curD?' checked':'')+'><i></i></span><div><b>'+s.adsT+'</b><span>'+s.adsD+'</span></div></div>'
      +'<div class="ck-row"><button id="ck-confirm" class="ck-btn" type="button">'+s.conf+'</button></div>';
    document.getElementById('ck-confirm').addEventListener('click',function(){
      apply({
        a:document.getElementById('ck-ana').checked?'granted':'denied',
        d:document.getElementById('ck-ads').checked?'granted':'denied'
      });
    });
  }
  function showBanner(){
    ensureStyle();
    if(!document.getElementById('ck-banner')){
      var d=document.createElement('div');
      d.id='ck-banner';
      document.body.appendChild(d);
    }
    renderChoice();
  }
  document.addEventListener('DOMContentLoaded',function(){
    if(!stored)showBanner();
    /* "Change my cookie choice" buttons on the privacy page */
    document.querySelectorAll('.manage-cookies').forEach(function(b){
      b.addEventListener('click',function(){
        try{localStorage.removeItem(KEY)}catch(e){}
        stored=null;
        showBanner();
      });
    });
  });
})();
