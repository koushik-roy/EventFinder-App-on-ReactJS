import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as toastr } from "react-redux-toastr";
import { eventReducer } from "./reducers/eventReducer";
import { searchReducer } from "./reducers/searchReducer";
import { alert } from "./reducers/alertReducer";
//
const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    toastr,
    eventReducer,
    alert,
    searchReducer,
    //... all reducers
  });

export default createRootReducer;
