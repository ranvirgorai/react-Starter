import { createStore, applyMiddleware,compose } from "redux";
import reducer from "reducers";
import reduxPromise from "redux-promise";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = ({initialState={}}) => {
  const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(reduxPromise)));
  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('reducers', () => {
        store.replaceReducer(reducer);
      });
    }
  }
  return store;
};

export default configureStore;
