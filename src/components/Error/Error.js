import Navigation from 'components/Navigation/Navigation';
import React, {Component} from 'react';
import './Error.scss';

class Error extends Component {

  render() {
    return (
      <>
        <Navigation disableControls={true} />
        <section className="error">
          <div className="message">
            {this.props.children}
          </div>
          <div className={`illustration ${this.constructor.randomItem([
            'bus',
            'metro',
            'train',
            'tram',
          ])}`}/>
        </section>
      </>
    );
  }

  static randomItem(array) {
    return array[Math.floor((Math.random() * array.length))];
  }

}

export default Error;
