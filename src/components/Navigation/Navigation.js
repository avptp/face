import arrowLeft from 'images/icons/arrow-left.svg';
import imagotypeWhite from 'images/imagotype_white.svg';
import React, {Component} from 'react';
import {Translation} from 'react-i18next';
import {Link} from 'react-router-dom';
import './Navigation.scss'

class Navigation extends Component {
  render() {
    return (
      <Translation>
        {
          t =>
            <nav>
              <div className="control">
                <Link to="/">
                  <img src={arrowLeft} alt=""/>
                </Link>
              </div>
              <Link to="/" className="imagotype">
                <img src={imagotypeWhite} alt={t('app:name')}/>
              </Link>
              <div className="actions"/>
            </nav>
        }
      </Translation>
    );
  }
}

export default Navigation;
