"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const i18next_http_backend_1 = __importDefault(require("i18next-http-backend"));
const i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
const fallbackLng = ["fr"];
const availableLanguages = ["en", "ar", "fr"];
i18next_1.default
    .use(i18next_http_backend_1.default)
    .use(i18next_browser_languagedetector_1.default)
    .use(react_i18next_1.initReactI18next)
    .init({
    fallbackLng,
    detection: {
        checkWhitelist: true,
    },
    debug: false,
    whitelist: availableLanguages,
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            "MODERN | COMFORTABLE | SAFE": "SOMNETHING ENGLISH"
        },
        fr: {
            "MODERN | COMFORTABLE | SAFE": "SOMNETHING FRENCH"
        }
    }
});
exports.default = i18next_1.default;
