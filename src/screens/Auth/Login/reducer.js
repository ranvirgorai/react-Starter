import { fromJS } from 'immutable';
import { MAKE_LOGIN, MAKE_LOGIN_SUCCESS, MAKE_LOGIN_ERROR } from './constants';

export const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case MAKE_LOGIN:
      return state
        .set('submit', true)
        .set('token', null)
        .set('user', null)
        .set('error', null);
    case MAKE_LOGIN_SUCCESS:
      return state.set('token', action.token).set('user', action.user);
    case MAKE_LOGIN_ERROR:
      return state
        .set('submit', false)
        .set('token', null)
        .set('user', null)
        .set('error', action.err);
    default:
      return state;
  }
}

export default loginReducer;
