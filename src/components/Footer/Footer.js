import imagotype from 'images/imagotype.svg';
import facebookLogo from 'images/social/facebook.svg';
import githubLogo from 'images/social/github.svg';
import instagramLogo from 'images/social/instagram.svg';
import linkedinLogo from 'images/social/linkedin.svg';
import twitterLogo from 'images/social/twitter.svg';
import youtubeLogo from 'images/social/youtube.svg';
import React, {Component} from 'react';
import {Translation} from 'react-i18next';
import {Link} from 'react-router-dom'
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <Translation ns="footer">
        {
          (t, {i18n}) => {
            const language = i18n.language.split('-')[0];

            return (
              <footer>
                <div className="legal">
                  <Link to="/">
                    <img className="imagotype" src={imagotype} alt={t('app:name')}/>
                  </Link>
                  <p>{t('registration', {number: 'CV-01-058990-V'})}</p>
                  <p>{t('taxNumber', {number: 'G98998719'})}</p>
                </div>
                <div className="extra">
                  <div className="links">
                    <a href={`/documents/statutes/${language}.pdf`} target="_blank" rel="noopener noreferrer">{t('app:statutes')}</a>
                    <a href={`/documents/regulations/${language}.pdf`} target="_blank" rel="noopener noreferrer">{t('app:regulations')}</a>
                    <Link to="/team">{t('team:name')}</Link>
                    <a href="https://blog.avptp.org">{t('app:blog')}</a>
                  </div>
                  <div className="social">
                    <div className="title">{t('followUs')}</div>
                    <a href="https://twitter.com/avptp" target="_blank" rel="noopener noreferrer">
                      <img className="icon" src={twitterLogo} alt="Twitter"/>
                    </a>
                    <a href="https://www.facebook.com/avptp.org" target="_blank" rel="noopener noreferrer">
                      <img className="icon" src={facebookLogo} alt="Facebook"/>
                    </a>
                    <a href="https://www.instagram.com/avptp" target="_blank" rel="noopener noreferrer">
                      <img className="icon" src={instagramLogo} alt="Instagram"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCG-AS9LUPEZK3NagPhXy4Tw" target="_blank" rel="noopener noreferrer">
                      <img className="icon" src={youtubeLogo} alt="YouTube"/>
                    </a>
                    <a href="https://www.linkedin.com/company/avptp" target="_blank" rel="noopener noreferrer">
                      <img className="icon" src={linkedinLogo} alt="LinkedIn"/>
                    </a>
                    <a href="https://github.com/avptp" target="_blank" rel="noopener noreferrer">
                      <img className="icon" src={githubLogo} alt="GitHub"/>
                    </a>
                  </div>
                  <select className="language" value={i18n.language.split('-')[0]} onChange={(event) => i18n.changeLanguage(event.target.value)}>
                    {
                      i18n.options.safeWhitelist.map(language => {
                        return <option key={language} value={language}>{t(`languages:${language}`)}</option>
                      })
                    }
                  </select>
                </div>
              </footer>
            )
          }
        }
      </Translation>
    );
  }
}

export default Footer;
