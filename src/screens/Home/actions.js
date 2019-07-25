/*
 *
 * Login actions
 *
 */

import {
  GET_HOME_FEED,
  GET_HOME_FEED_SUCCESS,
  GET_HOME_FEED_ERROR,
} from "./constants";

export function getHomeFeed(data) {
  return {
    type: GET_HOME_FEED,
    data
  };
}

export function getHomeFeedSuccess(data) {
  return {
    type: GET_HOME_FEED_SUCCESS,
    data
  };
}

export function getHomeFeedError(error) {
  return {
    type: GET_HOME_FEED_ERROR,
    error
  };
}
