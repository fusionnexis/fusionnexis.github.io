// Language switcher for legal pages.
// Reads ?lang=en|zh from the URL; defaults to English. Applies a body
// class that CSS uses to reveal one language block and hide the other.
(function () {
    var params = new URLSearchParams(window.location.search);
    var lang = params.get('lang');
    if (lang !== 'zh') lang = 'en';
    document.body.className = 'show-' + lang;

    // Wire the language-switch links so they preserve the current page.
    var links = document.querySelectorAll('.lang-switch a');
    for (var i = 0; i < links.length; i++) {
        var target = links[i].getAttribute('data-lang');
        var url = new URL(window.location.href);
        url.searchParams.set('lang', target);
        links[i].setAttribute('href', url.pathname + url.search);
        if (target === lang) links[i].classList.add('active');
    }
})();
