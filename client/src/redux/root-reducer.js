import { combineReducers } from "redux";
import usersReducers from "./reducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  data: usersReducers,
  modal: modalReducer,
});

export default rootReducer;
