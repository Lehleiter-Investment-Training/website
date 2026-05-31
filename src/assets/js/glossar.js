// Progressive Enhancement für das Glossar.
// Das Markup wird serverseitig gerendert (siehe src/glossar.njk und
// src/_data/glossar.js). Dieses Skript filtert nur das vorhandene DOM und
// fügt Smooth-Scroll für die Alphabet-Navigation hinzu – es erzeugt keinen
// Inhalt. So bleibt das Glossar auch ohne JavaScript voll lesbar (und für
// Such-/KI-Crawler sichtbar).
(function () {
    const searchInput = document.getElementById('searchInput');
    const searchCount = document.getElementById('searchCount');
    const noResults = document.getElementById('noResults');
    const noResultsTerm = document.getElementById('noResultsTerm');
    const cards = Array.from(document.querySelectorAll('.term-card'));
    const sections = Array.from(document.querySelectorAll('.letter-section'));
    const total = cards.length;

    function filter(rawTerm) {
        const query = rawTerm.trim().toLowerCase();
        let visible = 0;

        cards.forEach(card => {
            const match = !query || (card.dataset.search || '').includes(query);
            card.hidden = !match;
            if (match) visible++;
        });

        // Buchstaben-Sektionen ohne sichtbare Begriffe ausblenden.
        sections.forEach(section => {
            section.hidden = !section.querySelector('.term-card:not([hidden])');
        });

        if (searchCount) {
            searchCount.textContent = query
                ? `${visible} von ${total} Begriffen gefunden`
                : `${total} Begriffe verfügbar`;
        }

        if (noResults) {
            noResults.hidden = visible !== 0;
            if (noResultsTerm) noResultsTerm.textContent = rawTerm;
        }
    }

    if (searchInput) {
        searchInput.addEventListener('input', e => filter(e.target.value));
    }

    // Smooth-Scroll für die Alphabet-Navigation.
    document.querySelectorAll('.alphabet-nav a:not(.disabled)').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();
