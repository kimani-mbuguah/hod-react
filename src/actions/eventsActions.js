import { GET_EVENTS, SET_EVENTS } from "./types";
const axios = require("axios");

//GET EVENTS FROM BACKEND SERVER
export const getEvents = history => dispatch => {
  return axios
    .get("http://localhost:5002/events/get")
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: SET_EVENTS,
          payload: res.data
        });
      } else {
        history.push("/");
      }
    })
    .catch(err => {
      console.log(err);
    });
};
