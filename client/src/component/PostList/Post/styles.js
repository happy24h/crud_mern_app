import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  media: {
    height: 250,
  },

  MoreVert: {
    // display: "none",
    "&:hover": {
      backgroundColor: "blue",

      display: "block",
    },
  },
  menu: {
    display: "none",
  },
}));
