import _ from 'lodash';
import {
  FETCH_CHART2
} from '../actions/types';

export default function(state = {}, action) {
  // Attention!!! The state object here refers to state.posts, instead of the application state.

  switch(action.type) {
    case FETCH_CHART2:
        return _.mapKeys(action.payload, '_id');
    default:
      return state;
  }
}