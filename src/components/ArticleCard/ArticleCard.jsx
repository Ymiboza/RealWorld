import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Avatar,
  Card,
  CardContent,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ArticleCard.module.css";

const ArticleCard = ({ article }) => {
  const {
    slug,
    title,
    favoritesCount,
    tagList,
    author,
    createdAt,
    description,
  } = article || {};
  const { username, image } = author;

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  return (
    <Card key={slug} id={styles.card}>
      <CardContent>
        <div className={styles["card-block"]}>
          <div className={styles["card-link-block"]}>
            <div className={styles["card-icon-block"]}>
              <Link to={`/${slug}`}>
                <div id={styles["card-link"]}>
                  {title.length > 30 ? `${title.slice(0, 30)}...` : title}
                </div>
              </Link>
              <IconButton
                edge="end"
                aria-label="like"
                style={{ color: "white" }}
              >
                <FavoriteBorderIcon />
              </IconButton>
              <span style={{ marginLeft: "12px" }}>{favoritesCount}</span>
            </div>
            {tagList && tagList.map((tag, index) => (
              <Chip
                key={index}
                className={styles["Chip"]}
                variant="outlined"
                label={tag && tag.length > 10 ? `${tag.slice(0, 10)}...` : tag}
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
                {username}
              </Typography>
              <Typography id={styles["avatar-date"]} variant="body1">
                {formatDate(createdAt)}
              </Typography>
            </div>
            <Avatar
              id={styles["avatar"]}
              src={image}
              sx={{ bgcolor: "#05b577" }}
            ></Avatar>
          </div>
        </div>
        <Typography style={{ fontFamily: "Regular" }} variant="body1">
          {description > 100 ? `${description.slice(0, 100)}...` : description}
        </Typography>
      </CardContent>
    </Card>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
};

export default ArticleCard;
