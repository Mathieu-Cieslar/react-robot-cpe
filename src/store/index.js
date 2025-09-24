import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import robotReducer from "../reducers/robot.reducers.js";

export const store = createStore(robotReducer, composeWithDevTools());