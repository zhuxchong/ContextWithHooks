export const ADD_NUM = "ADD_NUM";
const testFunction = state => {
  return { ...state, num: state.num + 1 };
};

export const testReducer = (state, action) => {
  switch (action.type) {
    case ADD_NUM:
      //console.log(state);
      //state=>internal data store
      //action=>data change and action type
      return testFunction(state);
    default:
      return state;
  }
};
