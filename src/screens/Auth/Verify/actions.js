/*
 *
 * Login actions
 *
 */

import {
  VERIFY_OTP,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_ERROR,
  VERIFY_OTP_RESET,
  VERIFY_OTP_RESET_SUCCESS,
  VERIFY_OTP_RESET_ERROR
} from "./constants";

export function verifyOtp(data) {
  return {
    type: VERIFY_OTP,
    data
  };
}

export function verifyOtpSuccess(data) {
  return {
    type: VERIFY_OTP_SUCCESS,
    data
  };
}

export function verifyOtpError(error) {
  return {
    type: VERIFY_OTP_ERROR,
    error
  };
}

export function verifyOtpRest() {
  return {
    type: VERIFY_OTP_RESET
  };
}

export function verifyOtpRestSuccess() {
  return {
    type: VERIFY_OTP_RESET_SUCCESS
  };
}

export function verifyOtpRestError(error) {
  return {
    type: VERIFY_OTP_RESET_ERROR,
    error
  };
}
