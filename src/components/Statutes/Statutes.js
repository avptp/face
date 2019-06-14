import Legal from 'components/Legal/Legal';
import React, {Component} from 'react';
import {Translation} from 'react-i18next';
import Markdown from 'react-markdown';

class Statutes extends Component {

  render() {
    return (
      <Translation ns="statutes">
        {
          (t, {i18n}) =>
            <>
              <Legal>
                <Markdown
                  linkTarget="_blank">
                  {t('markdown')}
                </Markdown>
                <div className="document">

                </div>
              </Legal>
              <section className="download">
                <a href={`/documents/statutes/${i18n.languages[0]}.pdf`} target="_blank" rel="noopener noreferrer" className="button">{t('app:download')}</a>
              </section>
            </>
        }
      </Translation>
    );
  }

}

export default Statutes;
