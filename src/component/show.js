import React, { useContext } from "react";
import TestContext from "../store/test-context";
const Show = props => {
  const context = useContext(TestContext);
  //console.log(context);

  return (
    <div>
      <button onClick={() => context.testFunction(context.test)}>add me</button>
      <div>{context.test}</div>
    </div>
  );
};

export default Show;
