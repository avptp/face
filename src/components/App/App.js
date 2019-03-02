import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';
import NotFound from 'components/NotFound/NotFound';
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
      <GoogleAnalytics>
        <ScrollToTop/>
        <Helmet>
          <title>{t('app:name')}</title>
          {this.getAlternateLanguages()}
        </Helmet>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/team' component={Team}/>
          <Route path="*" component={NotFound}/>
        </Switch>
        <Footer/>
      </GoogleAnalytics>
    );
  }

  getAlternateLanguages() {
    const {i18n, location} = this.props;

    return i18n.options.safeWhitelist.map(language =>
      <link rel="alternate" hrefLang={language} href={`${location.pathname}?hl=${language}`} key={`language-${language}`}/>
    );
  }

}

export default withTranslation()(
  withRouter(App)
);
