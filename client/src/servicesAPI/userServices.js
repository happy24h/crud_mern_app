import axios from "../config/axios";

export const getAllUsers = () => {
  return axios.get("/posts");
};

export const createPost = (payload) => {
  return axios.post("/posts", payload);
};

export const deletePost = (id) => {
  return axios.delete(`/posts/delete/${id}`);
};

export const editPost = (data) => {
  return axios.put(`posts/update`, data);
};
