import {
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
} from "./constants";

export function triggerLogout(data) {
  return {
    type: LOGOUT,
    data
  };
}

export function triggerLogoutSuccess(data) {
  return {
    type: LOGOUT_SUCCESS,
    data
  };
}

export function triggerLogoutError(error) {
  return {
    type: LOGOUT_ERROR,
    error
  };
}
