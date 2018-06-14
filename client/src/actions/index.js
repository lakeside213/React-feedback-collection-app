import axios from 'axios';
import { FETCH_USER, FETCH_SURVEY } from './types';

export const fetchUser = () => {
  return async function(dispatch) {
    const response = await axios.get('/api/current_user');
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  };
};

export const handleToken = token => {
  return async function(dispatch) {
    const response = await axios.post('/api/stripe', token);
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  };
};
export const submitSurvey = (values, history) => {
  return async function(dispatch) {
    const response = await axios.post('/api/surveys', values);
    history.push('/surveys');
    dispatch({
      type: FETCH_USER,
      payload: response.data
    });
  };
};
export const fetchSurveys = () => {
  return async function(dispatch) {
    const response = await axios.get('/api/surveys');
    console.log(response);
    dispatch({
      type: FETCH_SURVEY,
      payload: response.data
    });
  };
};
