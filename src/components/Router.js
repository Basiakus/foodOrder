import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Wellcome from './Wellcome.js';
import App from './App.js';
import NotFound from './NotFound.js';

const Router = () => (
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Switch>
			<Route exact path='/' component={Wellcome}/>
			<Route path='/store/:storeId' component={App}/>
			<Route component={NotFound}/>
		</Switch>
	</BrowserRouter>
);

export default Router;