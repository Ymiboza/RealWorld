import {
  Avatar,
  Card,
  CardContent,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import styles from "./BlogList.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <div className={styles.container}>
      <Card id={styles.card}>
        <CardContent>
          <div className={styles["card-block"]}>
            <div className={styles["card-link-block"]}>
              <div className={styles["card-icon-block"]}>
                <Link to={"/article"}>
                  <div id={styles["card-link"]}>Some article title</div>
                </Link>
                <IconButton
                  edge="end"
                  aria-label="like"
                  style={{ color: "white" }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <span style={{ marginLeft: "12px" }}>12</span>
              </div>
              <Chip
                className={styles["Chip"]}
                variant="outlined"
                label="Tag1"
                style={{ color: "white" }}
              />
            </div>
            <div className={styles["avatar-block"]}>
              <div className={styles["avatar-text"]}>
                <Typography
                  id={styles["avatar-name"]}
                  variant="h2"
                  component="h2"
                >
                  John Doe
                </Typography>
                <Typography id={styles["avatar-date"]} variant="body1">
                  March 5, 2020
                </Typography>
              </div>
              <Avatar sx={{ bgcolor: "#05b577", width: 56, height: 56 }}>
                A
              </Avatar>
            </div>
          </div>
          <Typography style={{fontFamily: "Regular"}} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogList;
