/*
 * action types
 */
export const LOAD_ROBOTS = "LOAD_ROBOTS";
export const LOAD_PARTS = "LOAD_PARTS";
export const SET_SELECTED_ROBOT = "SET_SELECTED_ROBOT";
export const SET_SELECTED_PART = "SET_SELECTED_PART";

/*
 * action creators
 */

// Set robots list after fetch
export function loadRobots(robots) {
    return { type: LOAD_ROBOTS, payload: robots };
}

// Set parts list after fetch
export function loadParts(parts) {
    return { type: LOAD_PARTS, payload: parts };
}

// Set selected robot id
export function setSelectedRobot(robotId) {
    return { type: SET_SELECTED_ROBOT, payload: robotId };
}

// Set selected part id
export function setSelectedPart(partId) {
    return { type: SET_SELECTED_PART, payload: partId };
}