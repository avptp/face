import Legal from 'components/Legal/Legal';
import React, {Component} from 'react';
import {Translation} from 'react-i18next';
import Markdown from 'react-markdown';
import RehypeRaw from 'rehype-raw';

class Regulations extends Component {

  render() {
    return (
      <Translation ns="regulations">
        {
          (t, {i18n}) =>
            <>
              <Legal>
                <Markdown
                  linkTarget="_blank"
                  rehypePlugins={[RehypeRaw]}>
                  {t('markdown')}
                </Markdown>
              </Legal>
              <section className="download">
                <a href={`/documents/regulations/${i18n.languages[0]}.pdf`} target="_blank" rel="noopener noreferrer" className="button">{t('app:download')}</a>
              </section>
            </>
        }
      </Translation>
    );
  }

}

export default Regulations;
