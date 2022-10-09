import * as types from "./actionTypes";
import * as userServices from "../servicesAPI/userServices";

export const get_users = (data) => ({
  type: types.GET_USERS,
  payload: data,
});

export const getUsers = () => {
  return async (dispatch) => {
    let res = await userServices.getAllUsers();
    console.log("check res getUsers", res);
    dispatch(get_users(res));
  };
};

export const add_user = (data) => ({
  type: types.ADD_USER,
});

export const addUser = (data) => {
  return async (dispatch) => {
    let res = await userServices.createPost(data);
    console.log("check create post", res);
    dispatch(addUser());
    dispatch(getUsers());
  };
};

export const delete_user = () => ({
  type: types.DELETE_USER,
});

export const deleteUser = (data) => {
  return async (dispatch) => {
    let res = await userServices.deletePost(data);
    console.log("check res delete", res);
    dispatch(delete_user());
    dispatch(getUsers());
  };
};

export const edit_user = () => ({
  type: types.EDIT_USER,
});

export const editUser = (data) => {
  return async (dispatch) => {
    let res = await userServices.editPost(data);
    console.log("check res edit", res);
    dispatch(edit_user());
    dispatch(getUsers());
  };
};

export const show_modal = (data) => ({
  type: types.SHOW_MODAL,
  payload: data,
});

export const showModal = (data) => {
  return (dispatch) => {
    dispatch(show_modal(data));
    dispatch(getUsers());
  };
};

export const hide_modal = (data) => ({
  type: types.HIDE_MODAL,
  payload: data,
});

export const hideModal = (data) => {
  return (dispatch) => {
    dispatch(hide_modal(data));
    dispatch(getUsers);
  };
};

export const show_edit_modal = (data) => ({
  type: types.SHOW_EDIT_MODAL,
  payload: data,
});

export const showEditModal = (data) => {
  return (dispatch) => {
    dispatch(show_edit_modal(data));
  };
};

export const hide_edit_modal = (data) => ({
  type: types.HIDE_EDIT_MODAL,
  payload: data,
});

export const hideEditModal = (data) => {
  return (dispatch) => {
    dispatch(hide_edit_modal(data));
  };
};

export const get_id_modal = (data) => ({
  type: types.GET_ID_MODAL,
  payload: data,
});

export const getIdModal = (data) => {
  return (dispatch) => {
    dispatch(get_id_modal(data));
  };
};
