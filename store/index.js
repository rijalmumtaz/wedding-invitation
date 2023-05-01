import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
// redux-thunk, which allows simple asyc use dispatch
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const middleware = [thunk];

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      // checking redux devtools extension is exist or not
      composeEnhancers()
    )
  );
  return store;
}
