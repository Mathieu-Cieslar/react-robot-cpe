import { LOAD_ROBOTS, SET_SELECTED_ROBOT } from "../actions"

const initialState = { robots: [], selectedPartIds: [] }

export function robotReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    switch (action.type) {
        case LOAD_ROBOTS: {
            return {
                ...state,
                robots: action.payload
            }
        }
        case SET_SELECTED_ROBOT: {
            return {
                ...state,
                selectedPartIds: action.payload
            }
        }
        // Otherwise return the existing state unchanged
        default:
            return state
    }
}

export default robotReducer