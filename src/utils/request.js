import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */

import { getToken, authRedirect } from 'utils/auth';

function parseJSON(response) {
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401) {
    localStorage.clear();
    authRedirect();
  }
  if (response.status >= 400 && response.status < 500) {
    return response;
  }
  if (response.status === 500) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export function request(url, options) {
  if (!options) {
    options = {};
  }

  //options.credentials = 'include';
  if (!options.headers) {
    options.headers = {
      'Accept': 'application/json',
      'Content-type': 'application/json; charset=utf-8',
      'x-auth-token': getToken(),
      'x-source-country': 'CA',
    };
  }

  if (options.body && typeof (options.body) !== 'string') {
    options.body = JSON.stringify(options.body);
  }

  if (options.formdata) {
    const formdata = options.formdata;
    const filedata = new FormData();
    const keys = Object.keys(options.formdata);

    keys.forEach((item) => {
      formdata[item] && filedata.append(item, formdata[item]);
    });

    options.method = 'post';
    options.body = filedata;
    options.headers = {
      'Accept': 'application/json',
      'x-auth-token': getToken(),
      'x-source-country': 'CA',
    };
    options.credentials = 'include';
    console.log('POST OPTIONS :: ', options);
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}

export default request;