import _ from 'lodash';
import {
  FETCH_CHART
} from '../actions/types';

export default function(state = {}, action) {
  // Attention!!! The state object here refers to state.posts, instead of the application state.

  switch(action.type) {
    case FETCH_CHART:
        return (action.payload);
    default:
      return state;
  }
}