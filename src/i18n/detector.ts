import { LanguageDetectorModule, Services, InitOptions } from "i18next";
import type { ServerResponse } from "http";
import { Request } from "../types/request";
import url from "url";
import accept from "@hapi/accept";

export default class ServerDetector implements LanguageDetectorModule {
  type: "languageDetector";

  request: Request;
  response: ServerResponse;
  services?: Services;

  constructor(request: Request, response: ServerResponse) {
    this.type = "languageDetector";
    this.request = request;
    this.response = response;
  }

  init(
    services: Services,
    detectorOptions: object = {},
    i18nextOptions: InitOptions = {}
  ) {
    this.services = services;
  }

  detect(): string | readonly string[] | undefined {
    // Query string
    if (this.request.url) {
      const queryObject = url.parse(this.request.url, true).query;
      const { hl: query } = queryObject;

      if (query) {
        return query;
      }
    }

    // Cookie
    const { language: cookie } = this.request.cookies;

    if (cookie) {
      return cookie;
    }

    // Accept-Language header
    const header = this.request.headers["accept-language"];

    if (header) {
      return accept.languages(header);
    }

    return undefined;
  }

  cacheUserLanguage(lng: string) {
    const { language: cookie } = this.request.cookies;

    if (cookie !== lng) {
      this.response.setHeader("set-cookie", `language=${lng}; Secure`);
    }
  }
}
