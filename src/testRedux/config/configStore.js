import { createStore, combineReducers } from "redux"
import letters from "testRedux/modules/letters";
import member from "testRedux/modules/member";

const rootReducer = combineReducers({
  letters,
  member,
});

const store = createStore(rootReducer);

export default store;