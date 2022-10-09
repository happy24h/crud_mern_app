import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core";
import moment from "moment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import styles from "./styles";
import "./styles.css";

////////
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import { useDispatch } from "react-redux";
import {
  deleteUser,
  showEditModal,
  getIdModal,
  editUser,
} from "../../../redux/actions";

function Post({ post }) {
  const dispatch = useDispatch();
  // const history = useNavigate();
  const classes = styles();
  const onLikeBtnClick = (id) => {
    dispatch(
      editUser({
        ...post,
        likeCount: post.likeCount + 1,
        _id: id,
      })
    );
  };
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEdit = (id) => {
    dispatch(showEditModal(true));
    dispatch(getIdModal(id));
  };
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updateAt).format("HH:MM MMM DD,YYYY")}
        action={
          <IconButton className="icon_more_vert">
            <MoreVertIcon />
            <Paper
              className="menu-icon"
              sx={{
                width: 320,
                maxWidth: "100%",
                textAlign: "left",
                float: "right",
              }}
            >
              <MenuList>
                <MenuItem>
                  <ListItemIcon onClick={() => handleDelete(post._id)}>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                </MenuItem>

                <Divider />
                <MenuItem>
                  <ListItemIcon onClick={() => handleEdit(post._id)}>
                    <EditIcon fontSize="small" />
                  </ListItemIcon>
                </MenuItem>
              </MenuList>
            </Paper>
          </IconButton>
        }
      />

      <CardMedia
        image={post.attachment || ""}
        title="Title"
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onLikeBtnClick(post._id)}>
          <FavoriteIcon />
          <Typography
            component="span"
            color="textSecondary"
          >{`${post.likeCount} likes`}</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
