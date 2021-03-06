import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import UseCallbackExampleOne from "./examples/example-one.js";
import UseCallbackExampleTwo from "./examples/example-two.js";
import UseCallbackExampleThree from "./examples/example-three.js";
import UseCallbackExampleFour from "./examples/example-four.js";

const UseCallback = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/useCallback/example-one">
            Example one
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/useCallback/example-two">
            Example two
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/useCallback/example-three">
            Example three
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/useCallback/example-four">
            Example four
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/useCallback/example-one" component={UseCallbackExampleOne} />
        <Route path="/useCallback/example-two" component={UseCallbackExampleTwo} />
        <Route path="/useCallback/example-three" component={UseCallbackExampleThree} />
        <Route path="/useCallback/example-four" component={UseCallbackExampleFour} />
      </Switch>
    </>
  );
};

export default UseCallback;
