import { fromJS } from 'immutable';
import { GET_HOME_FEED, GET_HOME_FEED_SUCCESS, GET_HOME_FEED_ERROR } from './constants';

export const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HOME_FEED:
      return state
        .set('homeFeed', null)
        .set('loading', null)
        .set('error', null);
    case GET_HOME_FEED_SUCCESS:
      return state
      .set('homeFeed', action.payload)
      .set('loading', false)
      .set('error', null)
    case GET_HOME_FEED_ERROR:
      return state
      .set('loading', false)
      .set('error', action.error)
    default:
      return state;
  }
}

export default loginReducer;
