import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Cookies from 'js-cookie';

const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'cookie',
  lookup(options) {
    return Cookies.get('lang');
  },
});


const init = () => {

  i18n
    .use(HttpBackend)
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      keySeparator: false,
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: 'src/functions/language/locales/{{lng}}/{{ns}}.json',
      },
      debug: false
    });
}

const changeLanguage = (lang) => {
  Cookies.set('lang', lang);
  i18n.changeLanguage(lang);
}

const updateTranslations = () => {
    i18n.reloadResources();
}

const getLanguage = () => {
  return i18n.language;
}

export { init, changeLanguage, updateTranslations, getLanguage };