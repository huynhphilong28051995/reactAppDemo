import React from 'react';

import App from '../public/App';

import {
	ThreePanelView,
	TwoPanelView,
	ReduxStoreView,
} from '../public/view';

import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';

// redux-thunk is like a beautifier. Meaning it will allow you
// to write dispath code in a better syntax
import thunk from 'redux-thunk';

import reducers from '../redux/reducers'

let store = createStore(
	reducers,
	applyMiddleware(thunk),
);

const routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
		    	<IndexRoute component={ThreePanelView} />
		    	<Route path="/twopanelview" component={TwoPanelView} />
		    	<Route path="/threepanelview" component={ThreePanelView} />
		    	<Route path="/reduxstoreview" component={ReduxStoreView} />
		  	</Route>
		</Router>
	</Provider>
);

export default routes;