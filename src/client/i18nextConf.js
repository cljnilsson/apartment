import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const fallbackLng = ["en"];
const availableLanguages = ["en", "ru"];

const resources = {
	ru: {
		translation: {
			"MODERN | COMFORTABLE | SAFE": "современный | комфортный | безопасный".toUpperCase(),
			"Mountain View": "вид на горы",
			"Nearby Park(s)": "Ближайшие парки",
			"Low Floors (1-6)": "Низкие этажи (1-6)"
		}
	}
};

i18n
	.use(Backend) // load translations using http (default                                               public/assets/locals/en/translations)
	.use(LanguageDetector) // detect user language
	.use(initReactI18next) // pass the i18n instance to react-i18next.
	.init({
		resources,
		fallbackLng, // fallback language is english.
		lng: "ru",

		detection: {
			checkWhitelist: true, // options for language detection
		},

		debug: false,

		whitelist: availableLanguages,

		interpolation: {
			escapeValue: false, // no need for react. it escapes by default
		},

		react: { 
			useSuspense: false //   <---- this will do the magic
		}
});

export default i18n;