import { complete, incomplete } from "types/storeType";
import {
	deleteTodoActionCreator,
	markCompleteActionCreator,
	markIncompleteActionCreator,
} from "types/actionCreatorType";

interface AppPropType {
	complete: complete;
	incomplete: incomplete;
	deleteTodo: deleteTodoActionCreator;
	markComplete: markCompleteActionCreator;
	markIncomplete: markIncompleteActionCreator;
}

export default AppPropType;