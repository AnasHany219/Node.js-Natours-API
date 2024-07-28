/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'Password' or 'Data'
export const updateSettings = async (data, type) => {
  const url = `http://localhost:5000/api/v1/users/${type === 'Data' ? 'updateMe' : 'updateMyPassword'}`;
  try {
    const res = await axios({ method: 'PATCH', url, data });

    if (res.data.status === 'success')
      showAlert('success', `${type} Updated successfully!`);
    window.setTimeout(() => {
      location.assign('/');
    }, 1500);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
