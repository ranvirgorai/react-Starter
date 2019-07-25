
import { fromJS } from 'immutable';
import loginReducer from '../reducer';

describe('loginReducer', () => {
  test('returns the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(fromJS({}));
  });
});
