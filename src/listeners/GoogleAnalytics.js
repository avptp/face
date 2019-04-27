import PropTypes from 'prop-types';
import {Component} from 'react';
import ReactGA from 'react-ga';
import {withRouter} from 'react-router-dom';

class GoogleAnalytics extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    ReactGA.initialize('UA-135894001-1', {
      titleCase: false,
    });
  }

  componentDidMount() {
    const {history} = this.props;

    this.constructor.sendPageView(history.location);
    history.listen(this.constructor.sendPageView);
  }

  static sendPageView(location) {
    ReactGA.set({page: location.pathname});
    ReactGA.pageview(location.pathname);
  }

  render() {
    return this.props.children;
  }

}

export default withRouter(GoogleAnalytics);
