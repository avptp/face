import Error from 'components/Error/Error';
import 'components/Error/Error.scss';
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Translation} from 'react-i18next';
import {Link} from 'react-router-dom';

class NotFound extends Component {

  render() {
    return (
      <>
        <Helmet>
          <meta httpEquiv="status" content="404"/>
        </Helmet>
        <Translation ns="errors">
          {
            t =>
              <Error>
                <div className="title">{t('notFound.title')}</div>
                <div className="subtitle">{t('notFound.subtitle')}</div>
                <div className="actions">
                  <Link to="/" className="button">{t('default.startOver')}</Link>
                </div>
              </Error>
          }
        </Translation>
      </>
    );
  }

}

export default NotFound;
