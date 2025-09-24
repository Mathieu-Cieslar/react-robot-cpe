import { combineReducers } from "redux";
import { partReducer } from "./part.reducer.js";
import { robotReducer } from "./robot.reducers.js";


export const globalReducer = combineReducers({
    part: partReducer,
    robot: robotReducer
})