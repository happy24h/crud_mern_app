import styles from "./styles";
import { Typography } from "@material-ui/core";

function Header() {
  const classes = styles();
  return (
    <Typography variant="h4" align="center" className={classes.container}>
      Blog
    </Typography>
  );
}

export default Header;
