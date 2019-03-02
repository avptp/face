import {PropTypes} from 'prop-types';
import {Component} from 'react';
import ReactGA from 'react-ga';

class GoogleAnalytics extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);

    ReactGA.initialize('UA-135894001-1', {
      titleCase: false,
    });
  }

  componentDidMount() {
    this.constructor.sendPageView(this.context.router.history.location);
    this.context.router.history.listen(this.constructor.sendPageView);
  }

  static sendPageView(location) {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }

}

export default GoogleAnalytics;
