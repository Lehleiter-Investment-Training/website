/**
 * Cookie Consent Management
 * Verwendet localStorage für zuverlässige Speicherung
 */

(function() {
    'use strict';

    const STORAGE_KEY = 'cookieConsent';

    // Cookie Consent Funktionalität initialisieren
    function initCookieConsent() {
        const cookieConsent = document.getElementById('cookieConsent');

        // Wenn kein Cookie-Banner auf dieser Seite existiert, abbrechen
        if (!cookieConsent) return;

        const acceptAllBtn = document.getElementById('acceptAll');
        const acceptNecessaryBtn = document.getElementById('acceptNecessary');
        const savePreferencesBtn = document.getElementById('savePreferences');
        const functionalCookiesToggle = document.getElementById('functionalCookies');
        const analyticsCookiesToggle = document.getElementById('analyticsCookies');
        const marketingCookiesToggle = document.getElementById('marketingCookies');

        // Gespeicherte Einstellungen laden
        const savedPreferences = getPreferences();

        if (!savedPreferences) {
            // Banner anzeigen wenn keine Einstellungen vorhanden
            cookieConsent.classList.add('show');
        } else {
            // Gespeicherte Einstellungen anwenden
            if (functionalCookiesToggle) functionalCookiesToggle.checked = savedPreferences.functional;
            if (analyticsCookiesToggle) analyticsCookiesToggle.checked = savedPreferences.analytics;
            if (marketingCookiesToggle) marketingCookiesToggle.checked = savedPreferences.marketing;
            applyCookieSettings(savedPreferences);
        }

        // Event Listener
        if (acceptAllBtn) {
            acceptAllBtn.addEventListener('click', function() {
                const preferences = {
                    necessary: true,
                    functional: true,
                    analytics: true,
                    marketing: true,
                    timestamp: Date.now()
                };
                savePreferences(preferences);
                applyCookieSettings(preferences);
                hideBanner(cookieConsent);
            });
        }

        if (acceptNecessaryBtn) {
            acceptNecessaryBtn.addEventListener('click', function() {
                const preferences = {
                    necessary: true,
                    functional: false,
                    analytics: false,
                    marketing: false,
                    timestamp: Date.now()
                };

                if (functionalCookiesToggle) functionalCookiesToggle.checked = false;
                if (analyticsCookiesToggle) analyticsCookiesToggle.checked = false;
                if (marketingCookiesToggle) marketingCookiesToggle.checked = false;

                savePreferences(preferences);
                applyCookieSettings(preferences);
                hideBanner(cookieConsent);
            });
        }

        if (savePreferencesBtn) {
            savePreferencesBtn.addEventListener('click', function() {
                const preferences = {
                    necessary: true,
                    functional: functionalCookiesToggle ? functionalCookiesToggle.checked : false,
                    analytics: analyticsCookiesToggle ? analyticsCookiesToggle.checked : false,
                    marketing: marketingCookiesToggle ? marketingCookiesToggle.checked : false,
                    timestamp: Date.now()
                };
                savePreferences(preferences);
                applyCookieSettings(preferences);
                hideBanner(cookieConsent);
            });
        }
    }

    // Banner ausblenden
    function hideBanner(banner) {
        banner.classList.remove('show');
    }

    // Einstellungen speichern (localStorage)
    function savePreferences(preferences) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
        } catch (e) {
            // Fallback auf Cookie wenn localStorage nicht verfügbar
            setCookie(STORAGE_KEY, JSON.stringify(preferences), 365);
        }
    }

    // Einstellungen laden
    function getPreferences() {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
        } catch (e) {
            // Fallback auf Cookie
        }

        // Versuche Cookie zu lesen
        const cookieValue = getCookie(STORAGE_KEY);
        if (cookieValue) {
            try {
                return JSON.parse(cookieValue);
            } catch (e) {
                return null;
            }
        }
        return null;
    }

    // Cookie setzen (Fallback)
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/;SameSite=Lax";
    }

    // Cookie lesen (Fallback)
    function getCookie(name) {
        const cookieName = name + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(cookieName) === 0) {
                return decodeURIComponent(cookie.substring(cookieName.length));
            }
        }
        return null;
    }

    // Cookie-Einstellungen anwenden
    function applyCookieSettings(preferences) {
        if (preferences.analytics) {
            // Analytics aktivieren
            window.cookieConsentAnalytics = true;
        } else {
            window.cookieConsentAnalytics = false;
        }

        if (preferences.marketing) {
            // Marketing aktivieren
            window.cookieConsentMarketing = true;
        } else {
            window.cookieConsentMarketing = false;
        }

        if (preferences.functional) {
            // Funktionale Cookies aktivieren
            window.cookieConsentFunctional = true;
        } else {
            window.cookieConsentFunctional = false;
        }
    }

    // Initialisierung bei DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCookieConsent);
    } else {
        initCookieConsent();
    }

    // Globale Funktion zum Öffnen der Cookie-Einstellungen
    window.openCookieSettings = function() {
        const cookieConsent = document.getElementById('cookieConsent');
        if (cookieConsent) {
            cookieConsent.classList.add('show');
        }
    };
})();
