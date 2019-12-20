import { SET_MINISTRIES } from "../actions/types";

const initialState = {
  ministries: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MINISTRIES:
      return {
        ...state,
        ministries: action.payload
      };

    default:
      return state;
  }
}
