import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Button,
  Drawer,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getArticles } from "../../store/articleSlice";
import { getUser, logOut } from "../../store/userSlice";
import styles from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const image = useSelector((state) => state.users.image);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (Cookies.get("token")) {
      dispatch(getUser());
    }
  }, [dispatch]);

  const logOutHandler = async () => {
    toggleDrawer(false)
    await dispatch(logOut());
    dispatch(getArticles());
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <div className={styles.header}>
      <Link to={"/articles"}>
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
        <IconButton
          id={styles.menu}
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        {user ? (
          <div className={styles["header-user"]}>
            <Link to={"edit-profile"}>
              <Tooltip arrow title="Edit profile" placement="left">
                <Button id={styles["user"]}>
                  {user.username}{" "}
                  <Avatar
                    id={styles["avatar"]}
                    src={user.image ? user.image : image}
                    sx={{
                      bgcolor: "#05b577",
                      width: "60px",
                      height: "60px",
                      marginLeft: "10px",
                    }}
                  ></Avatar>
                </Button>
              </Tooltip>
            </Link>
            <Link to={"create-article"}>
              <Button id={styles["create-article"]}>Create article</Button>
            </Link>
            <Link to={"articles"}>
              <Button id={styles["log-out"]} onClick={logOutHandler}>
                Log out
              </Button>
            </Link>
          </div>
        ) : (
          <div className={styles["header-user"]}>
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
        )}
      </div>
      <Drawer
        className={styles.drawer}
        PaperProps={{
          style: {
            backgroundColor: "black",
          },
        }}
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {user ? (
          <div className={styles["header-user-menu"]}>
            <Link to={"edit-profile"}>
              <Tooltip arrow title="Edit profile" placement="left">
                <Button id={styles["user"]} onClick={toggleDrawer(false)}>
                  {user.username}{" "}
                  <Avatar
                    id={styles["avatar"]}
                    src={user.image ? user.image : image}
                    sx={{
                      bgcolor: "#05b577",
                      width: "60px",
                      height: "60px",
                      marginLeft: "10px",
                    }}
                  ></Avatar>
                </Button>
              </Tooltip>
            </Link>
            <Link to={"create-article"}>
              <Button id={styles["create-article"]} onClick={toggleDrawer(false)}>Create article</Button>
            </Link>
            <Link to={"articles"}>
              <Button id={styles["log-out"]} onClick={logOutHandler}>
                Log out
              </Button>
            </Link>
          </div>
        ) : (
          <>
            <Link to={"/sign-in"}>
              <Button id={styles["header-button-signIn"]} onClick={toggleDrawer(false)} variant="text">
                Sign In
              </Button>
            </Link>
            <Link to={"/sign-up"}>
              <Button id={styles["header-button-signUp"]} onClick={toggleDrawer(false)} variant="outlined">
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </Drawer>
    </div>
  );
};

export default Header;
