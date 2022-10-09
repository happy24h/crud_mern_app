import { Container, Fab } from "@material-ui/core";
import Header from "../component/Header";
import PostList from "../component/PostList";
import AddIcon from "@material-ui/icons/Add";
import CreatePostModal from "../component/CreatePostModal";
import useStyle from "./styles";
import { showModal } from "../redux/actions";
import { useDispatch } from "react-redux";
import EditModal from "../component/EditModal";

function Home() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(showModal(true));
  };
  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <EditModal />
      <CreatePostModal />
      <Fab color="primary" className={classes.fab} onClick={handleOpenModal}>
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default Home;
