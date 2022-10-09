import * as types from "./actionTypes";

const initialState = {
  dataModal: false,
  editModal: false,
  id: "",
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return { ...state, dataModal: action.payload };
    case types.HIDE_MODAL:
      return { ...state, dataModal: action.payload };
    case types.SHOW_EDIT_MODAL:
      return { ...state, editModal: action.payload };
    case types.HIDE_EDIT_MODAL:
      return { ...state, editModal: action.payload };
    case types.GET_ID_MODAL:
      return { ...state, id: action.payload };
    default:
      return state;
  }
}

export default modalReducer;
