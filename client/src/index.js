import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import Root from './Root';

import Logo from './static/logo.svg';
import '../styles.css';

ReactDOM.render(
  <Root>
    <App logo={Logo} />
  </Root>,
  document.getElementById('root')
);
