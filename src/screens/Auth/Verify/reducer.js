import { fromJS } from 'immutable';
import { VERIFY_OTP, VERIFY_OTP_SUCCESS, VERIFY_OTP_ERROR } from './constants';

export const initialState = fromJS({});

function verifyReducer(state = initialState, action) {
  switch (action.type) {
    case VERIFY_OTP:
      return state
        .set("loading", true)
        .set("user", null)
        .set("error", null);
    case VERIFY_OTP_SUCCESS:{
      return state
        .set("loading", false)
        .set("error", null)
        .set("user", action.data.data);
    }
    case VERIFY_OTP_ERROR:
      return state
        .set("loading", false)
        .set("error", action.error)
        .set("user", null);
    default:
      return state;
  }
}

export default verifyReducer;
