import { UPDATE_DATA } from "../actions/types.js";

const navigationReducer = (state = { next: 0 }, action) => {
  switch (action.type) {
    case UPDATE_DATA:
      let updatedData = { ...state };
      let updatedCount = updatedData[action.id] + 1;
      updatedData[action.id] = updatedCount;
      return updatedData;
    default:
      return state;
  }
};

export default navigationReducer;
