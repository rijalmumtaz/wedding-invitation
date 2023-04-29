import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";

// redux-thunk, which allows simple asyc use dispatch
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const middleware = [thunk];

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      // checking reduc devtools extesion is exist or not
      window.__REDUX_DEVTOOLS_EXTESION__
        ? window.__REDUX_DEVTOOLS_EXTESION__()
        : (f) => f
    )
  );
  return store;
}
