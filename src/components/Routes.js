import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {history} from "../configureStore";
import {alertActions} from "../constants/alertConstants";
import Landing from "./Landing";
import CreateEvent from "./CreateEvent";
import DeleteEvent from "./DeleteEvent";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/manage/create">
          <CreateEvent />
        </Route>
        <Route exact path="/manage/delete">
          <DeleteEvent />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
