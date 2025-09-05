import React, { useEffect } from 'react';
import { useCookieConsent } from '../hooks/useCookieConsent';

/**
 * Componente que gestiona la carga de scripts de terceros
 * según el consentimiento de cookies del usuario
 */
const ThirdPartyScripts: React.FC = () => {
  const { consent, hasConsent, isInitialized } = useCookieConsent();

  useEffect(() => {
    // No hacer nada hasta que esté inicializado
    if (!isInitialized) return;
    
    // Si no hay consentimiento, limpiar todos los scripts
    if (!hasConsent) {
      removeThirdPartyScripts();
      return;
    }

    // Cargar Google Analytics si se acepta analytics
    if (consent.analytics && !isGoogleAnalyticsLoaded()) {
      loadGoogleAnalytics();
    } else if (!consent.analytics) {
      removeAnalyticsScripts();
    }

    // Cargar scripts de marketing si se acepta marketing
    if (consent.marketing) {
      if (!isFacebookPixelLoaded()) {
        loadFacebookPixel();
      }
      if (!isGoogleAdsLoaded()) {
        loadGoogleAds();
      }
    } else {
      removeMarketingScripts();
    }

  }, [consent, hasConsent, isInitialized]);

  // Verificar si Google Analytics ya está cargado
  const isGoogleAnalyticsLoaded = (): boolean => {
    return typeof window !== 'undefined' && !!window.gtag;
  };

  // Verificar si Facebook Pixel ya está cargado
  const isFacebookPixelLoaded = (): boolean => {
    return typeof window !== 'undefined' && !!(window as any).fbq;
  };

  // Verificar si Google Ads ya está cargado
  const isGoogleAdsLoaded = (): boolean => {
    return typeof window !== 'undefined' && !!document.querySelector('script[src*="googleadservices.com"]');
  };

  // Cargar Google Analytics
  const loadGoogleAnalytics = () => {
    if (typeof window === 'undefined') return;

    // Reemplazar con tu ID real de Google Analytics
    const GA_MEASUREMENT_ID = 'G-1234567890';

    // Crear y cargar el script de Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    script.onload = () => {
      // Inicializar Google Analytics
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
        cookie_domain: 'auto',
        cookie_expires: 63072000, // 2 años en segundos
        send_page_view: true
      });

      // Google Analytics cargado
    };

    script.onerror = () => {
      // Error al cargar Google Analytics
    };
  };

  // Cargar Facebook Pixel
  const loadFacebookPixel = () => {
    if (typeof window === 'undefined') return;

    // Reemplazar con tu ID real de Facebook Pixel
    const FB_PIXEL_ID = '123456789012345';

    // Código del Facebook Pixel
    const fbqScript = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FB_PIXEL_ID}');
      fbq('track', 'PageView');
    `;

    // Crear script inline
    const script = document.createElement('script');
    script.innerHTML = fbqScript;
    document.head.appendChild(script);

    // Crear noscript para usuarios sin JavaScript
    const noscript = document.createElement('noscript');
    const img = document.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = `https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`;
    noscript.appendChild(img);
    document.head.appendChild(noscript);

    // Facebook Pixel cargado
  };

  // Cargar Google Ads
  const loadGoogleAds = () => {
    if (typeof window === 'undefined') return;

    // Reemplazar con tu ID real de Google Ads
    const GOOGLE_ADS_ID = 'AW-1234567890';

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GOOGLE_ADS_ID;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function() {
        window.dataLayer.push(arguments);
      };
      
      window.gtag('js', new Date());
      window.gtag('config', GOOGLE_ADS_ID);

      // Google Ads cargado
    };
  };

  // Efecto adicional para limpiar cookies cuando se revoca el consentimiento
  useEffect(() => {
    if (!isInitialized) return;
    
    if (!hasConsent) {
      // Limpiar todas las cookies de terceros
      clearThirdPartyCookies();
    } else {
      // Limpiar cookies específicas según el consentimiento
      if (!consent.analytics) {
        clearAnalyticsCookies();
      }
      if (!consent.marketing) {
        clearMarketingCookies();
      }
    }
  }, [consent.analytics, consent.marketing, hasConsent, isInitialized]);

  // Remover todos los scripts de terceros
  const removeThirdPartyScripts = () => {
    removeAnalyticsScripts();
    removeMarketingScripts();
  };

  // Remover scripts de analytics
  const removeAnalyticsScripts = () => {
    // Remover scripts de Google Analytics
    const gaScripts = document.querySelectorAll('script[src*="googletagmanager.com/gtag"]');
    gaScripts.forEach(script => script.remove());

    // Limpiar variables globales
    if (typeof window !== 'undefined') {
      delete (window as any).gtag;
      delete (window as any).dataLayer;
    }
  };

  // Remover scripts de marketing
  const removeMarketingScripts = () => {
    // Remover Facebook Pixel
    const fbScripts = document.querySelectorAll('script[src*="facebook.net"]');
    fbScripts.forEach(script => script.remove());

    // Remover Google Ads
    const adScripts = document.querySelectorAll('script[src*="googleadservices.com"]');
    adScripts.forEach(script => script.remove());

    // Limpiar variables globales
    if (typeof window !== 'undefined') {
      delete (window as any).fbq;
      delete (window as any)._fbq;
    }
  };

  // Limpiar cookies de terceros
  const clearThirdPartyCookies = () => {
    clearAnalyticsCookies();
    clearMarketingCookies();
  };

  // Limpiar cookies de analytics
  const clearAnalyticsCookies = () => {
    const analyticsCookies = ['_ga', '_ga_', '_gid', '_gat', '_gtag'];
    analyticsCookies.forEach(cookieName => {
      // Limpiar cookie del dominio actual
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      // Limpiar cookie del dominio padre
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      // Limpiar cookie del dominio raíz
      const domain = window.location.hostname.split('.').slice(-2).join('.');
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
    });
  };

  // Limpiar cookies de marketing
  const clearMarketingCookies = () => {
    const marketingCookies = ['_fbp', '_fbc', 'fr', 'sb', 'datr'];
    marketingCookies.forEach(cookieName => {
      // Limpiar cookie del dominio actual
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      // Limpiar cookie del dominio padre
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      // Limpiar cookie del dominio raíz
      const domain = window.location.hostname.split('.').slice(-2).join('.');
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${domain};`;
    });
  };

  // Este componente no renderiza nada visible
  return null;
};

export default ThirdPartyScripts;

// Declaraciones globales para TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    _fbq: any;
  }
}