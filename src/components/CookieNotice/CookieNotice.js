import React, {Component} from 'react';
import {Translation} from 'react-i18next';
import './CookieNotice.scss'

class CookieNotice extends Component {

  constructor(props) {
    super(props);

    this.state = {
      accepted: localStorage.getItem('cookies')
    };
  }

  accept() {
    this.setState({accepted: true});
    localStorage.setItem('cookies', 'true');
  }

  render() {
    if (this.state.accepted) {
      return null;
    }

    return (
      <Translation ns="cookies">
        {
          t =>
            <div className="cookie-notice">
              <div className="text">
                <span>{t('message')}</span>
              </div>
              <div className="actions">
                <a href={t('link')} target="_blank" rel="noopener noreferrer">{t('information')}</a>
                <button onClick={() => this.accept()}>{t('accept')}</button>
              </div>
            </div>
        }
      </Translation>
    );
  }

}

export default CookieNotice;
