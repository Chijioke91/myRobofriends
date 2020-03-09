import axios from 'axios';
import {
  CHANGE_SEARCH_TERM,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED
} from './types';

export const setSearchTerm = term => {
  return {
    type: CHANGE_SEARCH_TERM,
    payload: term
  };
};

export const fetchRobots = () => async dispatch => {
  dispatch({ type: FETCH_ROBOTS_PENDING });

  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    dispatch({
      type: FETCH_ROBOTS_SUCCESS,
      payload: data
    });
  } catch (e) {
    dispatch({ type: FETCH_ROBOTS_FAILED, payload: e.message });
  }
};
