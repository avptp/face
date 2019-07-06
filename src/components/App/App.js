import CookieNotice from 'components/CookieNotice/CookieNotice';
import ErrorBoundary from 'components/Error/ErrorBoundary';
import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
import Regulations from 'components/Regulations/Regulations';
import Statutes from 'components/Statutes/Statutes';
import Team from 'components/Team/Team';
import ScrollToTop from 'hooks/ScrollToTop';
import GoogleAnalytics from 'listeners/GoogleAnalytics';
import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {withTranslation} from 'react-i18next';
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.scss'

class App extends Component {

  componentDidMount() {
    const {i18n} = this.props;

    this.constructor.setLanguage(i18n.language);
    i18n.on('languageChanged', this.constructor.setLanguage);
  }

  static setLanguage(language) {
    document.documentElement.setAttribute('lang', language);
  }

  render() {
    const {t} = this.props;

    return (
      <ErrorBoundary>
        <GoogleAnalytics>
          <ScrollToTop/>
          <Helmet>
            <title>{t('app:name')}</title>
            <meta name="description" content={t('app:description')}/>
            {this.getAlternateLanguages()}
            {this.getOpenGraphTags()}
            {this.getTwitterCardTags()}
          </Helmet>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/legal/statutes' component={Statutes}/>
            <Route exact path='/legal/regulations' component={Regulations}/>
            <Route exact path='/team' component={Team}/>
            <Route path="*" component={NotFound}/>
          </Switch>
          <Footer/>
          <CookieNotice/>
        </GoogleAnalytics>
      </ErrorBoundary>
    );
  }

  getAlternateLanguages() {
    const {i18n, location} = this.props;

    return i18n.options.safeWhitelist.map(language =>
      <link key={language} rel="alternate" hrefLang={language} href={`${location.pathname}?hl=${language}`}/>
    );
  }

  getOpenGraphTags() {
    const {t} = this.props;

    return ([
      <meta key="type" property="og:type" content="website"/>,
      <meta key="site_name" property="og:site_name" content={t('app:name')}/>,
      <meta key="title" property="og:title" content={t('app:name')}/>,
      <meta key="description" property="og:description" content={t('app:description')}/>,
      <meta key="image" property="og:image" content="/favicon/opengraph.png"/>,
    ]);
  }

  getTwitterCardTags() {
    const {t} = this.props;

    return ([
      <meta key="card" property="twitter:card" content="summary"/>,
      <meta key="site" property="twitter:site" content="avptp"/>,
      <meta key="creator" property="twitter:creator" content="avptp"/>,
      <meta key="title" property="twitter:title" content={t('app:name')}/>,
      <meta key="description" property="twitter:description" content={t('app:description')}/>,
      <meta key="image" property="twitter:image" content="/favicon/opengraph.png"/>,
    ]);
  }

}

export default withTranslation()(
  withRouter(App)
);
