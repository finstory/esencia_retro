import reducers from "./reducers";

let initialState = { ...reducers };

const rootReducer = (state = initialState, { payload }) => {
  if (payload) {
    const nameReducer = Object.keys(payload)[0];
    const stateReducer = state[nameReducer];

    payload = payload[nameReducer];
    
    return { ...state, [nameReducer]: { ...stateReducer, ...payload } };
  } else return { ...state };
};

export default rootReducer;
