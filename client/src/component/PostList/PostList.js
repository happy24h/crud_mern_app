import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../../redux/actions";
import Post from "./Post/Post";

function PostList() {
  const { users } = useSelector((state) => state.data);

  console.log("check users", users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <Grid container spacing={2} alignItems="stretch">
      {users.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PostList;
