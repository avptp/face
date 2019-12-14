import Display from 'hooks/Display';
import associateIcon from 'images/icons/associate.svg';
import supportIcon from 'images/icons/support.svg';
import React, {Component} from 'react';
import {withTranslation} from 'react-i18next';
import './JoinBox.scss';

class JoinBox extends Component {

  state = {};

  render() {
    const {t, type} = this.props;

    return (
      <div className={`join-box ${type}`}>
        <div className="box">
          <div className="icon">
            <img src={type === 'suport' ? supportIcon : associateIcon} alt=""/>
          </div>
          <div className="title">{t(`main:join.${type}.title`)}</div>

          <Display if={!this.state.clicked}>
            <p>{t(`main:join.${type}.description`)}</p>
            <hr/>
            <ul>
              <Display if={type === 'support'}>
                <li>{t('main:join.support.advantages.stickTogether')}</li>
                <li>{t('main:join.support.advantages.stayTuned')}</li>
                <li>{t('main:join.support.advantages.involve')}</li>
              </Display>
              <Display if={type === 'associate'}>
                <li>{t('main:join.associate.advantages.supporterOnes')}</li>
                <li>{t('main:join.associate.advantages.financialSupport')}</li>
                <li>{t('main:join.associate.advantages.associationBodies')}</li>
                <li>{t('main:join.associate.advantages.attendAndVote')}</li>
              </Display>
            </ul>
            <a
              href={`mailto:socis@avptp.org?subject=${encodeURI(t(`main:join.${type}.email.subject`))}&body=${encodeURI(t(`main:join.${type}.email.body`))}`}
              onClick={() => this.setState({clicked: true})}
              className="button reverse"
            >
              {t(`main:join.${type}.action`)}
            </a>
          </Display>
          <Display if={this.state.clicked}>
            <div>
              <p>{t('main:join.instructions.explain')}</p>
              <div className='instructions'>
                <div>
                  <strong>{t('main:join.instructions.direction')}:</strong> socis@avptp.org
                </div>
                <div>
                  <strong>{t('main:join.instructions.subject')}:</strong> {t(`main:join.${type}.email.subject`)}
                </div>
                <div>
                  <strong>{t('main:join.instructions.body')}:</strong>
                  <pre style={{whiteSpace: 'pre-wrap'}}>{t(`main:join.${type}.email.body`)}</pre>
                </div>
              </div>
            </div>
          </Display>
        </div>
      </div>
    );
  }
}

export default withTranslation()(JoinBox);
