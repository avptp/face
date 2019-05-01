import Navigation from 'components/Navigation/Navigation';
import React, {Component} from 'react';
import {Translation} from 'react-i18next';
import {Link} from 'react-router-dom'
import './NotFound.scss'

class NotFound extends Component {

  render() {
    return (
      <Translation ns="notFound">
        {
          t =>
            <>
              <Navigation/>
              <section className="not-found">
                <div className="message">
                  <div className="title">{t('message')}</div>
                  <Link to="/" className="button">{t('action')}</Link>
                </div>
                <div className={`illustration ${this.constructor.randomItem(['bus', 'metro', 'train', 'tram'])}`}/>
              </section>
            </>
        }
      </Translation>
    );
  }

  static randomItem(array) {
    return array[Math.floor((Math.random() * array.length))];
  }

}

export default NotFound;
