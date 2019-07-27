import { fromJS } from 'immutable';
import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from './constants';

export const initialState = fromJS({});

function logoutReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return state
        .set('logout', null)
        .set('loading', null)
        .set('error', null);
    case LOGOUT_SUCCESS:
      return state
      .set('logout', null)
      .set('loading', false)
      .set('error', null)
    case LOGOUT_ERROR:
      return state
      .set('logout', null)
      .set('loading', false)
      .set('error', action.error.message)
    default:
      return state;
  }
}

export default logoutReducer;
