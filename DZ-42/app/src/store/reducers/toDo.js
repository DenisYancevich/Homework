import { ADD_TODO, CHANGE_TODO } from "../../actions/toDo";

const initialState = {
  list: [],
  maxID: 0,
};

export default function toDoReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      state.list.push({
        id: state.maxID + 1,
        text: action.payload.text,
        stateComplete: false,
      });
      const newState = {
        list: [...state.list],
        maxID: state.maxID + 1,
      };
      return newState;
    }
    case CHANGE_TODO: {
      const obj = state.list.find((el) => el.id == action.payload.id);
      obj.stateComplete = !obj.stateComplete;
      const newState = {
        list: [...state.list],
        maxID: state.maxID,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
