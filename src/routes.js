import React from 'react';

import App from './App';

import {
	MainPage,
	DocumentTranslatePage,
	MyLibraryPage,
	PublicLibraryPage,
} from './component';

import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware, combineReducers } from 'redux';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// redux-thunk is like a beautifier. Meaning it will allow you
// to write dispath code in a better syntax
import thunk from 'redux-thunk';

import reducers from '../redux/reducers'

let store = createStore(
	combineReducers({
    	...reducers,
    	routing: routerReducer
  	}),
	applyMiddleware(thunk),
);

const history = syncHistoryWithStore(browserHistory, store);

const routes = (
	<Provider store={store}>
		<Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
			<Route path="/" component={App}>
		    	<IndexRoute component={MainPage} />
		    	<Route path="main" component={MainPage} />
		    	<Route path="document_translate" component={DocumentTranslatePage} />
		    	<Route path="my_library" component={MyLibraryPage} />
		    	<Route path="public_library" component={PublicLibraryPage} />
		    	{
		    	// 	<Route path="/twopanelview" component={TwoPanelView} />
		    	// <Route path="/threepanelview" component={ThreePanelView} />
		    	// <Route path="/reduxstoreview" component={ReduxStoreView} />
		    	}
		  	</Route>
		</Router>
	</Provider>
);

export default routes;