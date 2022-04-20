import Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { Request } from "../types/request";
import i18n, { initServer } from "../i18n";

type Props = DocumentProps & {
  lang: string;
};

export default class CustomDocument extends Document<Props> {
  static async getInitialProps(ctx: DocumentContext & { req: Request }) {
    if (ctx.req && ctx.res) {
      initServer(ctx.req, ctx.res);
    }

    return {
      ...(await Document.getInitialProps(ctx)),
      lang: i18n.resolvedLanguage,
    };
  }

  render() {
    return (
      <Html lang={this.props.lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
