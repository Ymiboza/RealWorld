import { Avatar, Button, Tooltip, Typography } from "@mui/material";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { getUser, logOut } from "../../store/userSlice";
import { getArticles } from "../../store/articleSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);
  const image = useSelector((state) => state.users.image);

  useEffect(() => {
    if (Cookies.get("token")) {
      dispatch(getUser());
    }
  }, [dispatch]);

  const logOutHandler = async () => {
    await dispatch(logOut());
    dispatch(getArticles());
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
        {user ? (
          <div className={styles["header-user"]}>
            <Link to={"edit-profile"}>
              <Tooltip arrow title="Edit profile" placement="left">
                <Button id={styles["user"]}>
                  {user.username}{" "}
                  <Avatar
                    id={styles["avatar"]}
                    src={user.image ? user.image : image}
                    sx={{ bgcolor: "#05b577", width: "60px", height: "60px", marginLeft:"10px" }}
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
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
