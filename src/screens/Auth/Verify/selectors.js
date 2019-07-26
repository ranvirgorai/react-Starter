import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectLoginDomain = state => state.verify || initialState;

const selectLoginSession = () =>
  createSelector(
    selectLoginDomain,
    subState => subState.toJS()
  );

export default selectLoginSession;
export { selectLoginDomain };
