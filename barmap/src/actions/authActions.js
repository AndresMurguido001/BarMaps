import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER, CLEAR_PROFILE } from './types.js';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

export const registerUser = (userData, history) => dispatch => {
  axios.post('api/user/register', userData)
  .then(res => {
    //obtain token
    const { token } = res.data
    //store in localStorage
    localStorage.setItem("jwtToken", token);
    //put it in headers
    setAuthToken(token)
    //decode
    const decoded = jwt_decode(token);

    //Set current user in state using decoded token
    dispatch(setCurrentUser(decoded))

    history.push("/profile")
  }).catch(err => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  })
}

export const loginUser = (userData, history) => dispatch => {
  axios.post("/api/user/login", userData)
  .then(res => {
    const { token } = res.data

    localStorage.setItem("jwtToken", token);

    setAuthToken(token)

    const decoded = jwt_decode(token)

    dispatch(setCurrentUser(decoded))
    //Redirect /profile
    history.push("/profile")
  }).catch(err => {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  })
}

export const userProfile = () => dispatch => {
  axios.get('/api/user/profile')
  .then(user => {
    console.log(user)
  })
}
export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken")
  dispatch({
    type: CLEAR_PROFILE,
    payload: {}
  })
  setAuthToken(false)
}



export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
