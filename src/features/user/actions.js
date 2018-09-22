import actionTypes from 'HackathonStarterReactNative/src/actionTypes';
import api from 'HackathonStarterReactNative/src/lib/api';

export function loginUser(body) {
  return {
    type: actionTypes.LOGIN_USER,
    payload: api.post('/v1/driver/login', body)
  }
}

