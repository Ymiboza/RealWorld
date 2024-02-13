import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneArticle } from "../../store/articleSlice";
import styles from "./Article.module.css";

const Article = () => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articles.article);
  console.log("article", article);
  const {
    title,
    favoritesCount,
    tagList,
    author,
    updatedAt,
    description,
    body,
  } = article;
  const username = author?.username;
  const image = author?.image;
  const { slug } = useParams();

  useEffect(() => {
    dispatch(getOneArticle(slug));
  }, [dispatch, slug]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <div className={styles.container}>
      <Card id={styles["post"]}>
        <CardContent>
          <div className={styles["post-block"]}>
            <div className={styles["post-link-block"]}>
              <div className={styles["post-icon-block"]}>
                <Link id={styles["post-link"]}>{title}</Link>
                <IconButton
                  edge="end"
                  aria-label="like"
                  style={{ color: "white" }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
                <span style={{ marginLeft: "12px" }}>{favoritesCount}</span>
              </div>
              {tagList &&
                tagList.map((tag, index) => (
                  <Chip
                    key={index}
                    className={styles["Chip"]}
                    variant="outlined"
                    label={tag.length > 20 ? `${tag.slice(0, 20)}...` : tag}
                    style={{ color: "white", marginRight: "10px" }}
                  />
                ))}
            </div>
            <div className={styles["avatar-block"]}>
              <div className={styles["avatar-text"]}>
                <Typography
                  id={styles["avatar-name"]}
                  variant="h2"
                  component="h2"
                >
                  {username && username}
                </Typography>
                <Typography id={styles["avatar-date"]} variant="body1">
                  {formatDate(updatedAt)}
                </Typography>
              </div>
              <Avatar
                src={image}
                sx={{ bgcolor: "#05b577", width: 56, height: 56 }}
              />
            </div>
          </div>
          <Typography
            style={{
              marginBottom: "15px",
              fontFamily: "Regular",
              fontSize: "18px",
            }}
          >
            {description}
          </Typography>

          <Divider
            orientation="horizontal"
            variant="middle"
            style={{
              marginTop: "20px",
              marginBottom: "15px",
              width: "100%",
              marginLeft: "0px",
              marginRight: "0px",
              backgroundColor: "#05b577",
            }}
          />
          <Typography style={{ fontFamily: "Regular", fontSize: "23px" }}>
            {body}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Article;
