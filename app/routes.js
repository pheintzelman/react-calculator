import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Calculator from './components/Calculator';
import About from './components/About';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Calculator} />
		<Route path="/about" component={About} />
	</Route>
);
