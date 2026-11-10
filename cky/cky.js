/* Statische Nachbildung des CookieYes-Banners der Originalseite (Texte und Markup 1:1).
   Speichert die Auswahl wie das Original im Cookie "cookieyes-consent". */
(function () {
  var BASE = (document.currentScript && document.currentScript.src || '').replace(/[^\/]*$/, '');
  var COOKIE = 'cookieyes-consent';
  var CATS = ['functional', 'analytics', 'performance', 'advertisement'];

  var COOKIES_NECESSARY = [
    ['elementor', 'Läuft nie ab', 'Das WordPress-Theme der Website verwendet dieses Cookie. Es ermöglicht dem Eigentümer der Website, den Inhalt der Website in Echtzeit zu implementieren oder zu ändern.'],
    ['wpEmojiSettingsSupports', 'Sitzung', "WordPress sets this cookie when a user interacts with emojis on a WordPress site.  It helps determine if the user's browser can display emojis properly."],
    ['cookieyes-consent', '1 Jahr', 'CookieYes setzt dieses Cookie, um die Einwilligungspräferenzen der Nutzer zu speichern, sodass ihre Präferenzen bei späteren Besuchen dieser Website berücksichtigt werden. Es werden keine persönlichen Informationen über die Besucher der Website gesammelt oder gespeichert.']
  ];
  var DESC_NECESSARY = 'Notwendige Cookies sind für die Grundfunktionen der Website von entscheidender Bedeutung. Ohne sie kann die Website nicht in der vorgesehenen Weise funktionieren.Diese Cookies speichern keine personenbezogenen Daten.';
  var CATEGORIES = [
    ['necessary', 'Notwendige', DESC_NECESSARY],
    ['functional', 'Funktionale', 'Funktionale Cookies unterstützen bei der Ausführung bestimmter Funktionen, z. B. beim Teilen des Inhalts der Website auf Social Media-Plattformen, beim Sammeln von Feedbacks und anderen Funktionen von Drittanbietern.'],
    ['analytics', 'Analyse', 'Analyse-Cookies werden verwendet um zu verstehen, wie Besucher mit der Website interagieren. Diese Cookies dienen zu Aussagen über die Anzahl der Besucher, Absprungrate, Herkunft der Besucher usw.'],
    ['performance', 'Leistungs', 'Leistungs-Cookies werden verwendet, um die wichtigsten Leistungsindizes der Website zu verstehen und zu analysieren. Dies trägt dazu bei, den Besuchern ein besseres Nutzererlebnis zu bieten.'],
    ['advertisement', 'Werbe', 'Werbe-Cookies werden verwendet, um Besuchern auf der Grundlage der von ihnen zuvor besuchten Seiten maßgeschneiderte Werbung zu liefern und die Wirksamkeit von Werbekampagne nzu analysieren.']
  ];
  var DESC_SHORT = '<p>Wir verwenden Cookies, damit Sie effizient navigieren und bestimmte Funktionen ausführen können. Detaillierte Informationen zu allen Cookies finden Sie unten unter jeder Einwilligungskategorie.</p><p>Die als „notwendig" kategorisierten Cookies werden in Ihrem Browser gespeichert, da sie für die Aktivierung der grundlegenden Funktionalitäten der Website unerlässlich sind....&nbsp;<button class="cky-show-desc-btn" data-cky-tag="show-desc-button" aria-label="Mehr zeigen">Mehr zeigen</button></p>';
  var DESC_FULL = ' <p>Wir verwenden Cookies, damit Sie effizient navigieren und bestimmte Funktionen ausführen können. Detaillierte Informationen zu allen Cookies finden Sie unten unter jeder Einwilligungskategorie.</p><p>Die als „notwendig" kategorisierten Cookies werden in Ihrem Browser gespeichert, da sie für die Aktivierung der grundlegenden Funktionalitäten der Website unerlässlich sind.</p><p>Wir verwenden auch Cookies von Drittanbietern, die uns dabei helfen, zu analysieren, wie Sie diese Website nutzen, Ihre Präferenzen zu speichern und die für Sie relevanten Inhalte und Werbeanzeigen bereitzustellen. Diese Cookies werden nur mit Ihrer vorherigen Einwilligung in Ihrem Browser gespeichert.</p><p>Sie können einige oder alle dieser Cookies aktivieren oder deaktivieren, aber die Deaktivierung einiger dieser Cookies kann Ihre Browser-Erfahrung beeinträchtigen.</p> <button class="cky-show-desc-btn" data-cky-tag="hide-desc-button" aria-label="Weniger zeigen">Weniger zeigen</button>';

  var BTN_OUT = 'color: #212121; border-color: #212121; background-color: transparent;';
  var BTN_IN = 'color: #FFFFFF; border-color: #212121; background-color: #212121;';
  var TBL = 'color: #212121; border-color: #ebebeb; background-color: #f4f4f4;';

  function desTable(list) {
    return list.map(function (c) {
      return '<ul class="cky-cookie-des-table"><li><div>Cookie</div><div>' + c[0] + '</div></li><li><div>Dauer</div><div>' + c[1] + '</div></li><li><div>Beschreibung</div><div>' + c[2] + '</div></li></ul>';
    }).join('');
  }

  function accordion(cat) {
    var nec = cat[0] === 'necessary';
    return '<div class="cky-accordion" id="ckyDetailCategory' + cat[0] + '"><div class="cky-accordion-item"><div class="cky-accordion-chevron"><i class="cky-chevron-right"></i></div><div class="cky-accordion-header-wrapper"><div class="cky-accordion-header"><button class="cky-accordion-btn" aria-expanded="false" aria-label="' + cat[1] + '" data-cky-tag="detail-category-title" style="color: #212121;">' + cat[1] + '</button>' + (nec ? '<span class="cky-always-active">Immer aktiv</span>' : '') + '</div><div class="cky-accordion-header-des" data-cky-tag="detail-category-description" style="color: #212121;"><p>' + cat[2] + '</p></div></div></div><div class="cky-accordion-body"><div class="cky-audit-table" data-cky-tag="audit-table" style="' + TBL + '">' + (nec ? desTable(COOKIES_NECESSARY) : '<p class="cky-empty-cookies-text">Keine Cookies zum Anzeigen.</p>') + '</div></div></div>';
  }

  var BANNER = '<div class="cky-consent-container cky-box-bottom-right cky-hide" tabindex="0"> <div class="cky-consent-bar" data-cky-tag="notice" style="border-color: #F4F4F4; background-color: #FFFFFF;">   <div class="cky-notice"> <p class="cky-title" role="heading" aria-level="1" data-cky-tag="title" style="color: #212121;"> Wir schätzen Ihre Privatsphäre </p> <div class="cky-notice-group"> <div class="cky-notice-des" data-cky-tag="description" style="color: #212121;"> <p>Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Anzeigen oder Inhalte einzusetzen und unseren Datenverkehr zu analysieren. Wenn Sie auf „Alle akzeptieren" klicken, stimmen Sie der Anwendung von Cookies zu.</p> </div>  <div class="cky-notice-btn-wrapper" data-cky-tag="notice-buttons"> <button class="cky-btn cky-btn-customize" aria-label="Anpassen" data-cky-tag="settings-button" style="' + BTN_OUT + '">Anpassen</button> <button class="cky-btn cky-btn-reject" aria-label="Alles ablehnen" data-cky-tag="reject-button" style="' + BTN_OUT + '">Alles ablehnen</button> <button class="cky-btn cky-btn-accept" aria-label="Alle akzeptieren" data-cky-tag="accept-button" style="' + BTN_IN + '">Alle akzeptieren</button>  </div> </div> </div> </div> </div>';

  var MODAL = '<div class="cky-modal" tabindex="0"> <div class="cky-preference-center" data-cky-tag="detail" style="color: #212121; border-color: #F4F4F4; background-color: #FFFFFF;"> <div class="cky-preference-header"> <span class="cky-preference-title" role="heading" aria-level="1" data-cky-tag="detail-title" style="color: #212121;">Einstellungen für die Zustimmung anpassen</span> <button class="cky-btn-close" aria-label="Nah dran" data-cky-tag="detail-close"> <img src="' + BASE + 'close.svg" alt="Close"> </button> </div> <div class="cky-preference-body-wrapper"> <div class="cky-preference-content-wrapper" data-cky-tag="detail-description" style="color: #212121;">' + DESC_SHORT + '</div>  <div class="cky-horizontal-separator"></div> <div class="cky-accordion-wrapper" data-cky-tag="detail-categories"> ' + CATEGORIES.map(accordion).join('') + ' </div> </div>  <div class="cky-footer-wrapper"> <span class="cky-footer-shadow" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);"></span> <div class="cky-prefrence-btn-wrapper" data-cky-tag="detail-buttons"> <button class="cky-btn cky-btn-reject" aria-label="Alles ablehnen" data-cky-tag="detail-reject-button" style="' + BTN_OUT + '"> Alles ablehnen </button> <button class="cky-btn cky-btn-preferences" aria-label="Speichern Sie meine Einstellungen" data-cky-tag="detail-save-button" style="' + BTN_OUT + '"> Speichern Sie meine Einstellungen </button> <button class="cky-btn cky-btn-accept" aria-label="Alle akzeptieren" data-cky-tag="detail-accept-button" style="' + BTN_IN + '"> Alle akzeptieren </button> </div> <div style="padding: 8px 24px; font-size: 12px; font-weight: 400; line-height: 20px; text-align: right; border-radius: 0 0 6px 6px; direction: ltr; display: flex; justify-content: flex-end; align-items: center; color: #293C5B; background-color: #EDEDED;" data-cky-tag="detail-powered-by"> Powered by <a target="_blank" rel="noopener" href="https://www.cookieyes.com/product/cookie-consent" style="margin-left: 5px; line-height: 0"><img src="' + BASE + 'poweredbtcky.svg" alt="Cookieyes logo" style="width: 78px; height: 13px; margin: 0"></a> </div> </div> </div>  </div>';

  var AUDIT_TABLE = '<h3>Notwendige</h3><div class="cky-category-des"><p>' + DESC_NECESSARY + '</p></div><div class="cky-table-wrapper"><table class="cky-cookie-audit-table"><thead><tr><th>Cookie</th><th>Dauer</th><th>Beschreibung</th></tr></thead><tbody>' +
    COOKIES_NECESSARY.map(function (c) { return '<tr><td>' + c[0] + '</td><td>' + c[1] + '</td><td>' + c[2] + '</td></tr>'; }).join('') + '</tbody></table></div>';

  function getConsent() {
    var m = document.cookie.match(/(?:^|; )cookieyes-consent=([^;]*)/);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function setConsent(action, accepted) {
    var id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    var v = 'consentid:' + btoa(id).replace(/=+$/, '') + ',consent:' + (accepted.length ? 'yes' : 'no') + ',action:' + action + ',necessary:yes';
    CATS.forEach(function (c) { v += ',' + c + ':' + (accepted.indexOf(c) > -1 ? 'yes' : 'no'); });
    document.cookie = COOKIE + '=' + v + '; path=/; max-age=31536000; SameSite=Lax';
  }

  function init() {
    var table = document.querySelector('.cky-audit-table-element');
    if (table && !table.innerHTML.trim()) table.innerHTML = AUDIT_TABLE;

    var wrap = document.createElement('div');
    wrap.innerHTML = '<div class="cky-overlay cky-hide"></div>' + BANNER + MODAL;
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);

    var overlay = document.querySelector('.cky-overlay');
    var banner = document.querySelector('.cky-consent-container');
    var modal = document.querySelector('.cky-modal');
    var consented = !!getConsent();
    if (!consented) banner.classList.remove('cky-hide');

    function openModal() {
      banner.classList.add('cky-hide');
      overlay.classList.remove('cky-hide');
      modal.classList.add('cky-modal-open');
    }
    function closeModal() {
      modal.classList.remove('cky-modal-open');
      overlay.classList.add('cky-hide');
      if (!consented) banner.classList.remove('cky-hide');
    }
    function done(action, accepted) {
      setConsent(action, accepted);
      consented = true;
      banner.classList.add('cky-hide');
      modal.classList.remove('cky-modal-open');
      overlay.classList.add('cky-hide');
    }

    document.addEventListener('click', function (e) {
      var t = e.target;
      if (t.closest('.cky-banner-element')) { e.preventDefault(); openModal(); return; }
      if (!t.closest('.cky-consent-container, .cky-modal')) return;
      if (t.closest('.cky-btn-customize')) openModal();
      else if (t.closest('.cky-btn-close')) closeModal();
      else if (t.closest('.cky-btn-accept')) done('yes', CATS);
      else if (t.closest('.cky-btn-reject')) done('yes', []);
      else if (t.closest('.cky-btn-preferences')) done('yes', []);
      else if (t.closest('.cky-show-desc-btn')) {
        var w = modal.querySelector('.cky-preference-content-wrapper');
        w.innerHTML = t.getAttribute('data-cky-tag') === 'show-desc-button' ? DESC_FULL : DESC_SHORT;
      } else if (t.closest('.cky-accordion-header-wrapper, .cky-accordion-chevron')) {
        var acc = t.closest('.cky-accordion');
        var open = acc.classList.toggle('cky-accordion-active');
        acc.querySelector('.cky-accordion-btn').setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
