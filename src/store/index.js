import { legacy_createStore } from "redux";

const initialState = { count: 0 };

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "inc": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "dec": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    default:
      return state;
  }
};

const store = legacy_createStore(countReducer);

export default store;
