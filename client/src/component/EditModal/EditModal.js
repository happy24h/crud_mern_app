import { useState, useCallback, useEffect } from "react";
import FileBase64 from "react-file-base64";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { editUser, hideEditModal, getUsers } from "../../redux/actions";
import { TextareaAutosize, TextField, Button } from "@material-ui/core";
import Modal from "@mui/material/Modal";

function EditModal() {
  // const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    _id: "",
    title: "",
    content: "",
    attachment: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  let { editModal, id } = useSelector((state) => state.modal);
  let { users } = useSelector((state) => state.data);

  console.log("check edit Modal and ID", editModal, "ID-->", id);

  let filterData = users.filter((item) => item._id === id);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    setData({ ...filterData[0] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleUpdate = useCallback(() => {
    setData({ ...data, _id: id });
    dispatch(editUser(data));
    dispatch(hideEditModal(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, dispatch]);

  const handleClose = () => {
    dispatch(hideEditModal(false));
  };

  const bodyModal = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Update Modal</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="Title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textarea}
          // style={{ minHeight: 10, maxHeight: 15 }}
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
            onClick={handleUpdate}
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
  return (
    <div>
      {/* <Button onClick={() => handleOpen()}>Open modal</Button> */}
      <Modal
        open={editModal}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {bodyModal}
      </Modal>
    </div>
  );
}

export default EditModal;
