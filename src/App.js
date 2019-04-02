import React from "react";
import Test from "./component/show";
import GlobalState from "./store/GlobalState";
const App = props => {
  return (
    <GlobalState>
      <Test />
    </GlobalState>
  );
};

export default App;
