import React, {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

function ScrollToTop({history}) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      document.getElementById('top').scrollIntoView({
        behavior: 'smooth'
      });
    });

    return () => {
      unlisten();
    }
  }, [history]);

  return <div id="top"/>;
}

export default withRouter(ScrollToTop);
