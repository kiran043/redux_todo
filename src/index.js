import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import Mainreducer from './reducer/Mainreducer';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(Mainreducer)

ReactDOM.render(<Provider store={store}>
<App /></Provider>, document.getElementById('root'));
