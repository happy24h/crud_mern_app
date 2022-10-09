import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/posts.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getPosts);

router.post("/", createPost);

router.put("/update", updatePost);

router.delete("/delete/:id", deletePost);

export default router;
