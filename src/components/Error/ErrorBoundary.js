import * as Sentry from '@sentry/browser';
import Error from 'components/Error/Error';
import config from 'config';
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Translation} from 'react-i18next';
import {Link} from 'react-router-dom';

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      eventId: null,
    };

    if (process.env.NODE_ENV === 'production') {
      Sentry.init({
        dsn: config.sentryDsn,
      });
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({error});

    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);

      const eventId = Sentry.captureException(error);
      this.setState({eventId})
    });
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    return (
      <>
        <Helmet>
          <meta httpEquiv="status" content="500"/>
        </Helmet>
        <Translation ns="errors">
          {
            t =>
              <Error>
                <div className="title">{t('default.title')}</div>
                <div className="subtitle">{t('default.subtitle')}</div>
                <div className="actions">
                  <button className="button reverse" onClick={() => Sentry.showReportDialog({eventId: this.state.eventId})}>
                    {t('default.report')}
                  </button>
                  <Link to="/" className="button">{t('default.startOver')}</Link>
                </div>
              </Error>
          }
        </Translation>
      </>
    );
  }

}

export default ErrorBoundary;
