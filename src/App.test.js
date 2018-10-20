import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

it('renders without crashing', () => {
  global.localStorage = {
    getItem: function () {
      return null
    }
  };

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
