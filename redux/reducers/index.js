import count from './count';

import { combineReducers } from 'redux';

const reducers = combineReducers({
  ...count,
})

export default reducers;