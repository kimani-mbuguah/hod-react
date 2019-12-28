import { combineReducers } from "redux";

import ministriesReducer from "./ministriesReducer";
import eventsReducer from "./eventsReducer";

export default combineReducers({
  ministriesData: ministriesReducer,
  eventsData: eventsReducer
});
