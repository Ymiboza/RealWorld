import { Button, Typography } from "@mui/material";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to={"/blog-list"}>
        <Typography id={styles["header-title"]} variant="h1" component="h1">
          <span style={{ color: "#05b577" }}>R</span>
          <span>eal</span>
          <span style={{ color: "#05b577" }}>W</span>
          <span>orld</span>
          <span style={{ color: "#05b577" }}> B</span>
          <span>log</span>
        </Typography>
      </Link>
      <div className={styles["header-buttons"]}>
        <Link to={"/sign-in"}>
          <Button id={styles["header-button-signIn"]} variant="text">
            Sign In
          </Button>
        </Link>
        <Link to={"/sign-up"}>
          <Button id={styles["header-button-signUp"]} variant="outlined">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
