import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from './middlewares/logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import monitorReducersEnhancer from './enhancers/monitorReducer'
import { counter } from './reducers'

const preloadedState = {
    //Add your app
    counter: {
        count: 1,
    }
};

const rootReducer = combineReducers({
    counter: counter
})

export default function configureStore() {
    const middlewares = [loggerMiddleware, thunkMiddleware]
    const middlewareEnhancer = applyMiddleware(...middlewares)

    const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
    const composedEnhancers = composeWithDevTools(...enhancers)

    const store = createStore(rootReducer, preloadedState, composedEnhancers)

    return store
}