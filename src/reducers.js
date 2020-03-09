import { combineReducers } from 'redux';

import {
  CHANGE_SEARCH_TERM,
  FETCH_ROBOTS_PENDING,
  FETCH_ROBOTS_SUCCESS,
  FETCH_ROBOTS_FAILED
} from './types';

const INIT_STATE_SEARCH = {
  term: ''
};

export const searchRobots = (state = INIT_STATE_SEARCH, { type, payload }) => {
  switch (type) {
    case CHANGE_SEARCH_TERM:
      return {
        ...state,
        term: payload
      };

    default:
      return state;
  }
};

const INIT_STATE_FETCH = {
  robots: [],
  isLoading: false,
  error: ''
};

export const fetchRobots = (state = INIT_STATE_FETCH, { type, payload }) => {
  switch (type) {
    case FETCH_ROBOTS_PENDING:
      return {
        ...state,
        isLoading: true
      };

    case FETCH_ROBOTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        robots: payload
      };

    case FETCH_ROBOTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default combineReducers({
  searchRobots,
  fetchRobots
});
