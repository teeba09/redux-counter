import { combineReducers } from "redux";
import CounterReducer from "./Counter";

const reducers = combineReducers({
  counter: CounterReducer,
});
export default reducers;
