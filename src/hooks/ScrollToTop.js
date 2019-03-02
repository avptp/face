import React from 'react';
import {withRouter} from 'react-router-dom';

function ScrollToTop({history}) {
  React.useEffect(() => {
    const unlisten = history.listen(() => {
      document.getElementById('top').scrollIntoView({behavior: 'smooth'});
    });

    return () => {
      unlisten();
    }
  }, []);

  return <div id="top"/>;
}

export default withRouter(ScrollToTop);
