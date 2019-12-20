import { SET_MINISTRIES } from "./types";
const ministriesData = [
  {
    name: "CHILDREN MINISTRY",
    image: "",
    preview:
      "The children sanctuary has many children gathering to worship every Sunday. The service runs concurrently with the main service."
  },
  {
    name: "YOUTH MINISTRY",
    preview:
      "The House of Destiny youth have been categorized in different groups as per different stages in life. This includes the high school students.."
  },
  {
    name: "FAMILY MINISTRY",
    preview:
      "Passionate to strengthen marriages and family as a pillar in the community, the ministry organizes for events and activities such as couple’s dinners..."
  },
  {
    name: "MEN MINISTRY",
    preview:
      "The men ministry encourages good stewardship as they bring men together to undertake projects towards accomplishing set goals."
  },
  {
    name: "WOMEN MINISTRY",
    preview:
      "The Destiny Pearls, as the House of Destiny women are referred to, are geared towards igniting the hearts of women for Christ."
  }
];

//Set ministries to state
export const setMinistries = history => dispatch => {
  dispatch({
    type: SET_MINISTRIES,
    payload: ministriesData
  });
};
