// Pixel da Meta, Google tag, consentimento de cookies e UTMs para os links da Hotmart.
import { TRACKING } from '../data/site';

const CONSENT_KEY = 'issma-consent';
const UTM_KEY = 'issma-utm';
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

export const trackingEnabled = Boolean(TRACKING.metaPixelId || TRACKING.googleTagId);

const storage = (type) => {
  try {
    return window[type];
  } catch {
    return null;
  }
};

export const getConsent = () => storage('localStorage')?.getItem(CONSENT_KEY) ?? null;

export const setConsent = (value) => {
  try {
    storage('localStorage')?.setItem(CONSENT_KEY, value);
  } catch {
    /* navegação privada: segue sem salvar */
  }
  if (value === 'granted') loadTrackers();
};

let loaded = false;

const loadTrackers = () => {
  if (loaded || !trackingEnabled) return;
  loaded = true;

  if (TRACKING.metaPixelId) {
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq('init', TRACKING.metaPixelId);
    window.fbq('track', 'PageView');
  }

  if (TRACKING.googleTagId) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING.googleTagId}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments); // eslint-disable-line prefer-rest-params
    };
    window.gtag('js', new Date());
    window.gtag('config', TRACKING.googleTagId);
  }
};

const track = (metaEvent, googleEvent, params = {}) => {
  if (!loaded) return;
  window.fbq?.('track', metaEvent, params);
  window.gtag?.('event', googleEvent, params);
};

// Guarda as UTMs do anúncio (ex.: ?utm_source=instagram) para repassar à Hotmart.
const saveUtms = () => {
  const params = new URLSearchParams(window.location.search);
  const utms = {};
  UTM_PARAMS.forEach((key) => {
    if (params.get(key)) utms[key] = params.get(key);
  });
  if (Object.keys(utms).length) {
    try {
      storage('sessionStorage')?.setItem(UTM_KEY, JSON.stringify(utms));
    } catch {
      /* sem armazenamento: as UTMs não são repassadas */
    }
  }
};

const readUtms = () => {
  try {
    return JSON.parse(storage('sessionStorage')?.getItem(UTM_KEY) || '{}');
  } catch {
    return {};
  }
};

const withUtms = (href) => {
  const utms = readUtms();
  if (!Object.keys(utms).length) return href;
  const url = new URL(href);
  Object.entries(utms).forEach(([key, value]) => {
    if (!url.searchParams.has(key)) url.searchParams.set(key, value);
  });
  // "src" aparece nos relatórios de vendas da Hotmart como origem da venda.
  if (!url.searchParams.has('src') && utms.utm_source) {
    url.searchParams.set('src', [utms.utm_source, utms.utm_campaign].filter(Boolean).join('_'));
  }
  return url.toString();
};

const onClick = (event) => {
  const link = event.target.closest?.('a[href]');
  if (!link) return;
  const href = link.getAttribute('href');

  if (/hotmart\.(com|host)/.test(href)) {
    link.setAttribute('href', withUtms(href));
  }

  const { checkoutName, checkoutValue } = link.dataset;
  if (checkoutName) {
    const params = { content_name: checkoutName, currency: 'BRL' };
    if (checkoutValue) params.value = Number(checkoutValue);
    track('InitiateCheckout', 'begin_checkout', params);
  } else if (href.startsWith('https://wa.me')) {
    track('Contact', 'contact', { method: 'whatsapp' });
  }
};

export const initTracking = () => {
  saveUtms();
  document.addEventListener('click', onClick, true);
  if (getConsent() === 'granted') loadTrackers();
};
