import { combineReducers } from "redux";
import complete from "./completeReducer";
import incomplete from "./incompleteReducer";

export default combineReducers({
	complete: complete,
	incomplete: incomplete,
});