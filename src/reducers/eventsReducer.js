import { SET_EVENTS, SET_EVENT } from "../actions/types";

const initialState = {
  events: null,
  event: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return {
        ...state,
        events: action.payload
      };

    case SET_EVENT:
      return {
        ...state,
        event: action.payload
      };

    default:
      return state;
  }
}
