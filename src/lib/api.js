import axios from 'axios';
import { store } from '../store'

store.subscribe(listener)

function listener() {
  let token = store.getState().user.token;
  // axios.defaults.headers.common['Authorization'] = `Token token=${token}`;
  // axios.defaults.headers.common['Authorization'] = `Token token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiQTNERUY5OTk1N0U3M0YifQ.1IGC1Sq_eON2CsO7boR_tssqwomYlqRUBiBjLHRbsCY`;
  //axios.defaults.headers.common['Authorization'] = `Token token=eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3Rva2VuIjoiN0M0MzI2RUYzOTY1NkMifQ.yvIsqmPScj9yzSMPW6aZOKUKUMoYtTQNSCtAd6mT_ig`;
}

// const API_URL = 'http://10.0.0.239:3000/api';
//const API_URL = 'http://10.22.209.126:3000/api';
const API_URL = 'http://localhost:3000/api';
// adb reverse tcp:3000 tcp:3000

const api = {
  async get(path, params = {}) {
    return await axios({
      baseURL:  API_URL,
      url:      path,
      method:  'GET',
      params:   params,
    })
  },
  async post(path, body = {}) {
    return await axios({
      baseURL:  API_URL,
      url:      path,
      method:  'POST',
      data:     body,
    })
  },
  async put(path, body = {}) {
    return await axios({
      baseURL:  API_URL,
      url:      path,
      method:  'PUT',
      data:     body,
    })
  },
}

export default api;
