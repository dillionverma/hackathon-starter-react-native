import actionTypes from 'HackathonStarterReactNative/src/actionTypes';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return state;
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.data.token,
      };
    case actionTypes.LOGIN_USER_FAILURE:
      console.log(action)
      return state;
    default:
      return state;
  }
}
