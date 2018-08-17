import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import middleware from './middleware'


const store = createStore(reducers,middleware)

ReactDOM.render(
	<Provider store={store}>
		<App store={store}/>
	</Provider>
	, document.getElementById('root'));