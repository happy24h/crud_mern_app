import { useState, useCallback } from "react";
import FileBase64 from "react-file-base64";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addUser, hideModal } from "../../redux/actions";
import { TextareaAutosize, TextField, Button } from "@material-ui/core";
import Modal from "@mui/material/Modal";

function CreatePostModal() {
  // const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    content: "",
    attachment: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  let { dataModal } = useSelector((state) => state.modal);

  // console.log("check dataModal", dataModal);

  const onSubmit = useCallback(() => {
    dispatch(addUser(data));
    dispatch(hideModal(false));
  }, [data, dispatch]);

  const handleClose = useCallback(() => {
    dispatch(hideModal(false));
  }, [dispatch]);

  const bodyModal = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <br />
        <TextareaAutosize
          className={classes.textarea}
          rowsMin={10}
          rowsMax={15}
          placeholder="Content..."
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );
  return (
    <div>
      {/* <Button onClick={() => handleOpen()}>Open modal</Button> */}
      <Modal
        open={dataModal}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {bodyModal}
      </Modal>
    </div>
  );
}

export default CreatePostModal;
