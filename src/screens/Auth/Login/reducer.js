import { fromJS } from "immutable";
import { MAKE_LOGIN, MAKE_LOGIN_SUCCESS, MAKE_LOGIN_ERROR } from "./constants";

export const initialState = fromJS({});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case MAKE_LOGIN:
      return state
        .set("loading", true)
        .set("user", null)
        .set("error", null);
    case MAKE_LOGIN_SUCCESS: {
      return state
        .set("loading", false)
        .set("error", null)
        .set("user", action.data.data);
    }
    case MAKE_LOGIN_ERROR: {
      return state
        .set("loading", false)
        .set("error", action.error)
        .set("user", null);
    }
    default:
      return state;
  }
}

export default loginReducer;
