(function(){
  var root = document.documentElement;

  function setLang(l){
    root.lang = l;
    document.querySelectorAll('.lang button').forEach(function(b){
      b.setAttribute('aria-pressed', b.dataset.lang === l ? 'true' : 'false');
    });
    try{ localStorage.setItem('zs-lang', l); }catch(e){}
  }

  // Öncelik: ?lang=en|tr  >  kayıtlı tercih  >  tarayıcı dili
  var fromUrl = new URLSearchParams(location.search).get('lang');
  var saved = null;
  try{ saved = localStorage.getItem('zs-lang'); }catch(e){}
  var lang = fromUrl || saved || ((navigator.language || 'tr').toLowerCase().indexOf('tr') === 0 ? 'tr' : 'en');
  setLang(lang === 'en' ? 'en' : 'tr');

  document.querySelectorAll('.lang button').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.dataset.lang); });
  });

  var btn = document.getElementById('copy-email');
  if(btn){
    var done = document.getElementById('copied');
    var email = document.getElementById('email');
    btn.addEventListener('click', function(){
      function ok(){ done.hidden = false; setTimeout(function(){ done.hidden = true; }, 1800); }
      function fallback(){
        var r = document.createRange(); r.selectNodeContents(email);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      }
      try{ navigator.clipboard.writeText(email.textContent).then(ok, fallback); }
      catch(e){ fallback(); }
    });
  }
})();
