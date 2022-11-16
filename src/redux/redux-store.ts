import {applyMiddleware,combineReducers,createStore} from 'redux'

import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({

})
export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
