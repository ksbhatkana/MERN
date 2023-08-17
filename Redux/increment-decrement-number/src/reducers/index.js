import { combineReducers } from "redux";
import incDecNumber from "./incrementDecrement";

const rootReducer = combineReducers({
    incDecNumber: incDecNumber
});

export default rootReducer;