import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import  { createStore , applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Routes from './routes';
import reducers from './reducers';
import {firebase,storage} from './firebase-config.js'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'

const createStoreWithMiddleware =  applyMiddleware(promiseMiddleware,ReduxThunk.withExtraArgument({firebase,storage}))(createStore);

ReactDOM.render( 
    <Provider store={createStoreWithMiddleware( reducers )}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);