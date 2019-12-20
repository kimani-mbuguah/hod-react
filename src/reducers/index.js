import { combineReducers } from "redux";

import ministriesReducer from "./ministriesReducer";

export default combineReducers({
  ministriesData: ministriesReducer
});
