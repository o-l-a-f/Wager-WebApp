import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AmplifyConfiguration} from "./api/amplify";

AmplifyConfiguration.configureAmplify();

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
