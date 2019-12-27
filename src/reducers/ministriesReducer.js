import { SET_MINISTRIES, SET_MINISTRY } from "../actions/types";

const initialState = {
  ministries: null,
  ministry: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MINISTRIES:
      return {
        ...state,
        ministries: action.payload
      };

    case SET_MINISTRY:
      return {
        ...state,
        ministry: action.payload
      };

    default:
      return state;
  }
}
