import i18n, { init } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import Backend from "i18next-http-backend/cjs";
import { initReactI18next } from "react-i18next";
import ruTranslation from '../public/locals/ru.json'
import uzTranslation from '../public/locals/uz.json'
import engTranslation from '../public/locals/eng.json'

const lang = localStorage.getItem('i18nextLng') || 'eng';


i18n
    // .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    init({
        fallbackLng: 'eng',
        lng: lang,
        debug: true,
        resources: {
            uz: {translation: uzTranslation},
            eng: {translation: engTranslation},
            ru: {translation: ruTranslation}
        }
    })


export default i18n;