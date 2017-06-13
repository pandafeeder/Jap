import { createStore, applyMiddleware } from 'redux';
import { thunkMiddleware } from 'redux-thunk';
import { logger } from 'redux-logger';
import { rootReducer } from './reducers';

const configStore = initState => {
  return createStore(
    rootReducer,
    initState,
    applyMiddleware(
      logger,
      thunkMiddleware
    )
  )
}

export default configStore
