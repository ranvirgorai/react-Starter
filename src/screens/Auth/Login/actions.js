/*
 *
 * Login actions
 *
 */

import {
  MAKE_LOGIN,
  MAKE_LOGIN_SUCCESS,
  MAKE_LOGIN_ERROR,
  MAKE_LOGIN_RESET,
  MAKE_LOGIN_RESET_SUCCESS,
  MAKE_LOGIN_RESET_ERROR
} from "./constants";

export function makeLogin(data) {
  return {
    type: MAKE_LOGIN,
    data
  };
}

export function makeLoginSuccess(data) {
  return {
    type: MAKE_LOGIN_SUCCESS,
    data
  };
}

export function makeLoginError(error) {
  return {
    type: MAKE_LOGIN_ERROR,
    error
  };
}

export function makeLoginRest() {
  return {
    type: MAKE_LOGIN_RESET
  };
}

export function makeLoginRestSuccess() {
  return {
    type: MAKE_LOGIN_RESET_SUCCESS
  };
}

export function makeLoginRestError(error) {
  return {
    type: MAKE_LOGIN_RESET_ERROR,
    error
  };
}
