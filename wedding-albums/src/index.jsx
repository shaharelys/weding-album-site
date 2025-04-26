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
    resources: {
      he: {
        translation: heTranslations
      }
    },
    lng: 'he',
    fallbackLng: 'he',
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