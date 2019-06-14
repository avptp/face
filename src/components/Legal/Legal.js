import Navigation from 'components/Navigation/Navigation';
import React, {Component} from 'react';
import './Legal.scss'

class Legal extends Component {

  render() {
    return (
      <>
        <Navigation/>
        <section className="legal">
          {this.props.children}
        </section>
      </>
    );
  }

}

export default Legal;
