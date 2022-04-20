import i18n from "i18next";
import ServerDetector from "./detector";
import BrowserDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import options from "./options";
import { Request } from "../types/request";
import type { ServerResponse } from "http";

if (typeof window !== "undefined" && !i18n.isInitialized) {
  i18n.use(BrowserDetector).use(initReactI18next).init(options);
}

export function initServer(req: Request, res: ServerResponse) {
  i18n.use(new ServerDetector(req, res)).use(initReactI18next).init(options);
}

export default i18n;
