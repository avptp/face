import Navigation from 'components/Navigation/Navigation';
import githubLogo from 'images/social/github.svg';
import linkedinLogo from 'images/social/linkedin.svg';
import twitterLogo from 'images/social/twitter.svg';
import webLogo from 'images/social/web.svg';
import React, {Component} from 'react';
import {Translation} from 'react-i18next';
import './Team.scss'

class Team extends Component {
  render() {
    return (
      <Translation ns="team">
        {
          t =>
            <>
              <Navigation/>
              <section className="team">
                <div className="category">
                  <div className="title">{t('representativeBody.name')}</div>
                  <div className="tags">
                    <span className="tag">{t('representativeBody.mandate')}</span>
                    <span className="tag">{t('representativeBody.period')}</span>
                  </div>
                  <div className="description">{t('representativeBody.description')}</div>
                  <div className="persons">
                    <div className="person">
                      <img className="avatar" src="https://secure.gravatar.com/avatar/b2c1e221fd0a5a52d01a01278e285742.jpg?d=retro&s=300" alt=""/>
                      <div className="name">Jaime Paricio</div>
                      <div className="position">{t('representativeBody.positions.president')}</div>
                      <div className="co-founder">{t('representativeBody.co-founder')}</div>
                      <div className="social">
                        <a href="https://www.linkedin.com/in/jaime-paricio-garcia" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={linkedinLogo} alt="LinkedIn"/>
                        </a>
                      </div>
                    </div>
                    <div className="person">
                      <img className="avatar" src="https://secure.gravatar.com/avatar/73d7fd71768fc5305e22fe14dc0bc205.jpg?d=retro&s=300" alt=""/>
                      <div className="name">Víctor Díaz Marco</div>
                      <div className="position">{t('representativeBody.positions.vicePresidentAndSpokesperson')}</div>
                      <div className="co-founder">{t('representativeBody.co-founder')}</div>
                      <div className="social">
                        <a href="https://v0ctor.me" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={webLogo} alt="Web"/>
                        </a>
                        <a href="https://linkedin.com/in/v0ctor" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={linkedinLogo} alt="LinkedIn"/>
                        </a>
                        <a href="https://twitter.com/v0ctor" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={twitterLogo} alt="Twitter"/>
                        </a>
                        <a href="https://github.com/v0ctor" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={githubLogo} alt="GitHub"/>
                        </a>
                      </div>
                    </div>
                    <div className="person">
                      <img className="avatar" src="https://secure.gravatar.com/avatar/5338dcd43ada152f033b638ceaada0af.jpg?d=retro&s=300" alt=""/>
                      <div className="name">Fran Torregrosa Alegre</div>
                      <div className="position">{t('representativeBody.positions.secretary')}</div>
                      <div className="co-founder">{t('representativeBody.co-founder')}</div>
                      <div className="social">
                        <a href="https://frantorregrosa.me" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={webLogo} alt="Web"/>
                        </a>
                        <a href="https://www.linkedin.com/in/frantorreg" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={linkedinLogo} alt="LinkedIn"/>
                        </a>
                        <a href="https://twitter.com/frantorreg" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={twitterLogo} alt="Twitter"/>
                        </a>
                        <a href="https://github.com/frantorreg" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={githubLogo} alt="GitHub"/>
                        </a>
                      </div>
                    </div>
                    <div className="person">
                      <img className="avatar" src="https://secure.gravatar.com/avatar/9a46f61932ea70a9925957f924d0fff2.jpg?d=retro&s=300" alt=""/>
                      <div className="name">Rafa Bayona Llop</div>
                      <div className="position">{t('representativeBody.positions.treasurer')}</div>
                      <div className="co-founder">{t('representativeBody.co-founder')}</div>
                      <div className="social">
                        <a href="https://www.linkedin.com/in/rafa-bayona" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={linkedinLogo} alt="LinkedIn"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category">
                  <div className="title">{t('collaborators.name')}</div>
                  <div className="description">{t('collaborators.description')}</div>
                  <div className="persons">
                    <div className="person">
                      <img className="avatar" src="https://secure.gravatar.com/avatar/614be9cb8ee58ef39599fe8dc0c83331?d=retro&s=300" alt=""/>
                      <div className="name">Martín Montón Sanchis</div>
                      <div className="co-founder">{t('representativeBody.co-founder')}</div>
                      <div className="social">
                        <a href="https://twitter.com/MartinMonton_" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={twitterLogo} alt="Twitter"/>
                        </a>
                      </div>
                    </div>
                    <div className="person">
                      <img className="avatar" src="https://secure.gravatar.com/avatar/a4adeaa7ab008361255f9d093bf901ac?d=retro&s=300" alt=""/>
                      <div className="name">Domingo Rodríguez León</div>
                      <div className="position">{t('representativeBody.positions.audiovisualContentCreator')}</div>
                      <div className="social">
                        <a href="https://www.linkedin.com/in/domi" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={linkedinLogo} alt="LinkedIn"/>
                        </a>
                        <a href="https://twitter.com/Domirole" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={twitterLogo} alt="Twitter"/>
                        </a>
                      </div>
                    </div>
                    <div className="person">
                      <img className="avatar" src="https://secure.gravatar.com/avatar/8d8c1604c5999ddba3ffe0e8dcd5330e?d=retro&s=300" alt=""/>
                      <div className="name">Rubén</div>
                      <div className="position">{t('representativeBody.positions.audiovisualContentCreator')}</div>
                      <div className="social">
                        <a href="https://twitter.com/rubenxdesign" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={twitterLogo} alt="Twitter"/>
                        </a>
                      </div>
                    </div>
                    <div className="person">
                      <img className="avatar" src="https://secure.gravatar.com/avatar/19f5c23e7d5c453e6a01238a2130748b?d=retro&s=300" alt=""/>
                      <div className="name">Eloy Sanchis</div>
                      <div className="position">{t('representativeBody.positions.audiovisualContentCreator')}</div>
                      <div className="social">
                        <a href="https://twitter.com/EloySanchis" target="_blank" rel="noopener noreferrer">
                          <img className="icon" src={twitterLogo} alt="Twitter"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category">
                  <div className="title">{t('geographicalWorkGroup.name')}</div>
                  <div className="description">{t('geographicalWorkGroup.description')}</div>
                  <div className='subcategory'>
                    <div className='title'>{t('geographicalWorkGroup.alacant')}</div>
                    <div className="persons">
                      <div className="person">
                        <img className="avatar" src="https://secure.gravatar.com/avatar/0187eb8a7e27551478017eb47776d287?d=retro&s=300" alt=""/>
                        <div className="name">Marcos Salomón Uroz</div>
                        <div className="position">{t('representativeBody.positions.delegateInAlacant')}</div>
                        <div className="social">
                          <a href="https://twitter.com/enrospv" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src={twitterLogo} alt="Twitter"/>
                          </a>
                        </div>
                      </div>
                      <div className="person">
                        <img className="avatar" src="https://secure.gravatar.com/avatar/119f8c4fccd72f03ede8adfb137e4c6d?d=retro&s=300" alt=""/>
                        <div className="name">Aitor Escorza Ripoll</div>
                        <div className="social">
                          <a href="https://www.linkedin.com/in/escorza-ripoll/" target="_blank" rel="noopener noreferrer">
                            <img className="icon" src={linkedinLogo} alt="LinkedIn"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
        }
      </Translation>
    );
  }
}

export default Team;
