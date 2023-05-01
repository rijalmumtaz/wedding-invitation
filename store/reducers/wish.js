import { GIVE_WISH } from "../types";

const initialState = null;

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GIVE_WISH:
      return action.payload;
    default:
      return state;
  }
}
