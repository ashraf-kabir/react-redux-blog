import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth_reducer';
import profileReducer from './profile_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';
import chartsReducer from './chart_reducer';
import chartsReducer2 from './chart_reducer2';
import testdata from './testdata';

const rootReducer = combineReducers({
  form: formReducer,  // the form property of state is going to be produced by ReduxForm reducer
  auth: authReducer,
  profile: profileReducer,
  posts: postsReducer,
  comments: commentsReducer,
  charts: chartsReducer,
  chart2: chartsReducer2,
  testdata: testdata,
});

export default rootReducer;