import { fromJS } from 'immutable';
import { VERIFY_OTP, VERIFY_OTP_SUCCESS, VERIFY_OTP_ERROR } from './constants';

export const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case VERIFY_OTP:
      return state
        .set('submit', true)
        .set('token', null)
        .set('user', null)
        .set('error', null);
    case VERIFY_OTP_SUCCESS:
      return state.set('token', action.token).set('user', action.user);
    case VERIFY_OTP_ERROR:
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
