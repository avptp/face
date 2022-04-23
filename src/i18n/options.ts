import { InitOptions } from "i18next";
import resources from "./locales";

const options: InitOptions = {
  supportedLngs: ["ca", "es"],

  fallbackLng: {
    an: ["es"],
    ast: ["es"],
    eu: ["es"],
    gl: ["es"],
    oc: ["ca"],
    default: ["ca"],
  },

  resources,
  nonExplicitSupportedLngs: true,
  load: "languageOnly",
  ns: ["common"],
  defaultNS: "common",
  returnObjects: true,

  interpolation: {
    escapeValue: false,
  },

  detection: {
    order: ["cookie", "htmlTag"],
    lookupCookie: "language",
    caches: ["cookie"],
    cookieOptions: {
      path: "/",
      maxAge: 365 * 24 * 60 * 60,
      secure: true,
    },
  },
};

export default options;
