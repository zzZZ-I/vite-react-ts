import { createStore, combineReducers, applyMiddleware, compose, Middleware, Reducer } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

import appReducer from './modules/app'
import { IStoreState, IAction } from './types'

const reduces: Reducer<IStoreState, IAction<any>> = combineReducers<IStoreState>({
	app: appReducer,
})

// 中间件
const middleware: Middleware[] = [reduxThunk]
middleware.push(reduxLogger)

function createMyStore() {
	// eslint-disable-next-line no-underscore-dangle
	const store = window.__REDUX_DEVTOOLS_EXTENSION__
		? createStore(reduces, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__({})))
		: createStore(reduces, applyMiddleware(...middleware))

	return store
}

const store = createMyStore()

export default store
