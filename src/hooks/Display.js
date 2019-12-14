import React from 'react';

function Display(props) {

  if(!props.if) {
    return null;
  }

  return (
    <React.Fragment>
      {props.then ? props.then() : props.children}
    </React.Fragment>
  );

}

export default Display;
