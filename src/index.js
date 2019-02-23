import {createStore, applyMiddleware} from 'redux';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';


const customMiddleWare = store => next => action => {
    next(action)
    console.log("Store condition after action: ");
    console.log(store.getState());
    console.log('\n');
    console.log("Middleware triggered this action:", action.type);
    //+1 is for initial condition
    console.log("Count of dispatched actions at " + new Date() + " = "+ (store.getState().counter))
    console.log('\n');
}


const store = createStore(reducers, applyMiddleware(thunk, customMiddleWare));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);
