import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import heTranslations from './locales/he/translations';

// Initialize i18next with Hebrew translations
i18n
  .use(initReactI18next)
  .init({
    debug: true, // <--- Add this line
    resources: {
      he: {
        translation: { // Default namespace
          'site.name': heTranslations['site.name'],
          'site.tagline': heTranslations['site.tagline'],
          'site.subtitle': heTranslations['site.subtitle'],
          'site.ctaButton': heTranslations['site.ctaButton'],
          'story.title': heTranslations['story.title'],
          'story.paragraph': heTranslations['story.paragraph'],
          'nav.home': heTranslations['nav.home'],
          'nav.howItWorks': heTranslations['nav.howItWorks'],
          'nav.pricing': heTranslations['nav.pricing'],
          'nav.contact': heTranslations['nav.contact'],
          'flow.title': heTranslations['flow.title'],
          'flow.step1': heTranslations['flow.step1'],
          'flow.step2': heTranslations['flow.step2'],
          'flow.step3': heTranslations['flow.step3'],
          'flow.step4': heTranslations['flow.step4'],
          'flow.step5': heTranslations['flow.step5'],
          'flow.step6': heTranslations['flow.step6'],
          'flow.step7': heTranslations['flow.step7'],
          'payment.transparency.title': heTranslations['payment.transparency.title'],
          'payment.transparency.subtitle': heTranslations['payment.transparency.subtitle'],
          'payment.transparency.bullet1': heTranslations['payment.transparency.bullet1'],
          'payment.transparency.bullet2': heTranslations['payment.transparency.bullet2'],
          'payment.transparency.bullet3': heTranslations['payment.transparency.bullet3'],
          'payment.transparency.pricing.title': heTranslations['payment.transparency.pricing.title'],
          'payment.transparency.pricing.item1': heTranslations['payment.transparency.pricing.item1'],
          'payment.transparency.pricing.item2': heTranslations['payment.transparency.pricing.item2'],
          'payment.transparency.refund.title': heTranslations['payment.transparency.refund.title'],
          'payment.transparency.refund.item1': heTranslations['payment.transparency.refund.item1'],
          'payment.transparency.refund.item2': heTranslations['payment.transparency.refund.item2'],
          'payment.transparency.refund.note': heTranslations['payment.transparency.refund.note'],
          'payment.transparency.privacy.title': heTranslations['payment.transparency.privacy.title'],
          'payment.transparency.privacy.item1': heTranslations['payment.transparency.privacy.item1'],
          'payment.transparency.privacy.item2': heTranslations['payment.transparency.privacy.item2'],
          'payment.transparency.privacy.item3': heTranslations['payment.transparency.privacy.item3'],
          'cta.title': heTranslations['cta.title'],
          'cta.button': heTranslations['cta.button'],
          'form.title': heTranslations['form.title'],
          'form.driveLink.label': heTranslations['form.driveLink.label'],
          'form.driveLink.placeholder': heTranslations['form.driveLink.placeholder'],
          'form.driveLink.instructions': heTranslations['form.driveLink.instructions'],
          'form.albumStyle.label': heTranslations['form.albumStyle.label'],
          'form.albumStyle.classic': heTranslations['form.albumStyle.classic'],
          'form.albumStyle.modern': heTranslations['form.albumStyle.modern'],
          'form.albumStyle.vintage': heTranslations['form.albumStyle.vintage'],
          'form.submit': heTranslations['form.submit'],
          'form.error': heTranslations['form.error'],
          'form.success': heTranslations['form.success'],
          'payment.title': heTranslations['payment.title'],
          'payment.amount': heTranslations['payment.amount'],
          'payment.cardNumber': heTranslations['payment.cardNumber'],
          'payment.expiry': heTranslations['payment.expiry'],
          'payment.cvc': heTranslations['payment.cvc'],
          'payment.submit': heTranslations['payment.submit'],
          'payment.agreement': heTranslations['payment.agreement'],
          'payment.privacyPolicy': heTranslations['payment.privacyPolicy'],
          'payment.termsOfService': heTranslations['payment.termsOfService'],
          'reviews.title': heTranslations['reviews.title'],
          'reviews.googleRating': heTranslations['reviews.googleRating'],
          'reviews.reviewCount': heTranslations['reviews.reviewCount'],
          'success.title': heTranslations['success.title'],
          'success.thankYou': heTranslations['success.thankYou'],
          'success.nextSteps': heTranslations['success.nextSteps'],
          'success.step1': heTranslations['success.step1'],
          'success.step2': heTranslations['success.step2'],
          'success.step3': heTranslations['success.step3'],
          'success.contactInfo': heTranslations['success.contactInfo'],
          'footer.copyright': heTranslations['footer.copyright'],
          'footer.privacy': heTranslations['footer.privacy'],
          'footer.terms': heTranslations['footer.terms'],
          'footer.contact': heTranslations['footer.contact'],
          'footer.email': heTranslations['footer.email'],
          'footer.whatsapp': heTranslations['footer.whatsapp'],
        },
        terms: heTranslations.terms,     // Dedicated 'terms' namespace
        privacy: heTranslations.privacy  // Dedicated 'privacy' namespace
      }
    },
    lng: 'he',
    fallbackLng: 'he',
    ns: ['translation', 'terms', 'privacy'], // Declare all namespaces
    defaultNS: 'translation', // Set default namespace
    interpolation: {
      escapeValue: false
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();