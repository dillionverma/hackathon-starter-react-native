import { combineReducers } from 'redux';
import userReducer from 'HackathonStarterReactNative/src/features/user/reducer';

// NOTE: When renaming reducer keys, remember to purge redux persistor
//      e.g. persistor.purge()
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
