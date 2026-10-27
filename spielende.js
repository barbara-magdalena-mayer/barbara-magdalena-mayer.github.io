/* Einheitliches Spielende für alle Lernspiele.
   Aufruf: spielEnde(element, { neu: function, weiter: {href, text}, titel, text })
   - neu: was „Neu beginnen“ tut (ohne Angabe: Seite neu laden)
   - weiter: nur im Lernpfad oder bei Fallsammlungen (nächster Teil, nächster Fall), {href, text} oder {onclick, text}
   Immer da: „↺ Neu beginnen“ und „← Zurück zur Werkstatt“. */
(function(){
  var WERKSTATT = "https://barbara-magdalena-mayer.github.io/";
  var CSS = ".spielende{margin:28px 0 8px;padding:20px 18px;border:3px solid #2f5240;border-radius:16px;background:#e3efe7;color:#1d2b22;max-width:640px;font-family:inherit}"
    + ".spielende .se-kopf{font-size:15px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#2f5240;margin:0 0 4px}"
    + ".spielende h2,.spielende .se-titel{font-size:26px;line-height:1.25;margin:0 0 6px;font-weight:700;color:#1d2b22}"
    + ".spielende p{margin:0 0 12px;font-size:19px;line-height:1.5}"
    + ".spielende .se-knoepfe{display:flex;flex-wrap:wrap;gap:10px;margin-top:6px}"
    + ".spielende .se-k{font:inherit;font-size:20px;font-weight:600;border-radius:12px;padding:12px 20px;cursor:pointer;text-decoration:none;display:inline-block;line-height:1.3;border:2px solid #2f5240}"
    + ".spielende .se-weiter{background:#2f5240;color:#fff;width:100%;text-align:center;margin-bottom:4px}"
    + ".spielende .se-neu{background:#fff;color:#2f5240}"
    + ".spielende .se-werk{background:#fff;color:#2f5240}"
    + ".spielende .se-k:focus-visible{outline:4px solid #7cc7bc;outline-offset:2px}"
    + "@media(max-width:480px){.spielende .se-k{width:100%;text-align:center}}"
    + "@media (prefers-color-scheme: dark){.spielende{background:#1d3127;border-color:#7cc7a0;color:#efe6e9}.spielende h2,.spielende .se-titel{color:#efe6e9}.spielende .se-kopf{color:#a8f0c8}.spielende .se-k{border-color:#7cc7a0}.spielende .se-weiter{background:#7cc7a0;color:#10201a}.spielende .se-neu,.spielende .se-werk{background:#241d20;color:#a8f0c8}}"
    + "@media print{.spielende{display:none}}";
  function style(){
    if (document.getElementById("spielende-css")) return;
    var s = document.createElement("style"); s.id = "spielende-css"; s.textContent = CSS; document.head.appendChild(s);
  }
  function esc(t){ return String(t).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]; }); }
  window.spielEnde = function(el, o){
    o = o || {}; style();
    if (typeof el === "string") el = document.querySelector(el);
    if (!el) return;
    var box = document.createElement("section");
    box.className = "spielende"; box.setAttribute("aria-label", "Ende des Spiels");
    box.innerHTML = '<p class="se-kopf">✓ Ende</p>'
      + '<p class="se-titel">' + esc(o.titel || "Du bist fertig.") + '</p>'
      + '<p>' + esc(o.text || "Wie geht es weiter? Spiel noch einmal von vorn oder geh zurück zur Werkstatt.") + '</p>'
      + '<div class="se-knoepfe">'
      + (o.weiter ? (o.weiter.href ? '<a class="se-k se-weiter" href="' + esc(o.weiter.href) + '">' + esc(o.weiter.text) + ' →</a>'
                                   : '<button type="button" class="se-k se-weiter">' + esc(o.weiter.text) + ' →</button>') : '')
      + '<button type="button" class="se-k se-neu">↺ Neu beginnen</button>'
      + '<a class="se-k se-werk" href="' + WERKSTATT + '">← Zurück zur Werkstatt</a>'
      + '</div>';
    box.querySelector(".se-neu").onclick = function(){
      if (typeof o.neu === "function") { o.neu(); window.scrollTo({top:0}); } else location.reload();
    };
    var w = box.querySelector("button.se-weiter");
    if (w && o.weiter && typeof o.weiter.onclick === "function") w.onclick = o.weiter.onclick;
    el.appendChild(box);
    return box;
  };
})();
