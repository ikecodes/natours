/* eslint-disable */
import { showAlert } from './alert';
import axios from 'axios';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/login',
      data: {
        email: email,
        password: password
      }
    });
    if (res.data.status === 'success') {
      showAlert('success', 'you logged in succesfully');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/users/logout'
    });
    if (res.data.status === 'success')
      showAlert('success', 'you logged in succesfully');
    window.setTimeout(() => {
      location.assign('/');
    }, 2000);
  } catch (error) {
    showAlert('error', 'error logging out, please try again');
  }
};
