export function selectAllRobots(state) {
    return state.robots;
}
export function selectAllParts(state) {
    return state.part.parts;
}
export function selectSelectedRobot(state) {
    return state.robot.robots.find((robot) => robot.id === state.selectedRobotId);
}
export function selectSelectedPart(state) {
    return state.part.parts.find((part) => part.id === state.selectedPartId);
}