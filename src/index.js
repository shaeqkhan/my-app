import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloUser from './HelloUser';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<HelloUser />, document.getElementById('root'));
registerServiceWorker();
