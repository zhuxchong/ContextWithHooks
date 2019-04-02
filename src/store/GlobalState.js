import React, { useReducer } from "react";
import { testReducer } from "./reducers";
import TestContext from "./test-context";
const GlobalState = props => {
  //const [data, changeData] = useState(1);
  const [state, dispatch] = useReducer(testReducer, { num: 1 }); //data is a obj and initialize data={num:1}
  const testFunction = () => {
    //and the data is whole store =state
    dispatch({ type: "ADD_NUM" });
  };
  //console.log(data);
  return (
    <TestContext.Provider
      value={{
        test: state.num,
        testFunction: testFunction
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};
export default GlobalState;
