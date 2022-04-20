import type { IncomingMessage } from "http";
import { NextApiRequestCookies } from "next/dist/server/api-utils";

export declare type Request = IncomingMessage & {
  cookies: NextApiRequestCookies;
};
