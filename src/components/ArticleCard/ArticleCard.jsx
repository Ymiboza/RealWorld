import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getArticles } from "../../store/articleSlice";
import { favoritePost, unFavoritePost } from "../../store/postsSlice";
import styles from "./ArticleCard.module.css";

const ArticleCard = ({ article, page }) => {
  const {
    slug,
    title,
    favorited,
    favoritesCount,
    tagList,
    author,
    createdAt,
    description,
  } = article || {};
  const { username, image } = author;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  const handleCardClick = () => {
    navigate(`/${slug}`);
  };

  const onLikes = async (isChecked) => {
    if (isChecked) {
      await dispatch(favoritePost(slug));
    } else {
      await dispatch(unFavoritePost(slug));
    }

    dispatch(getArticles(page));
  };

  const handleLike = async (event) => {
    if (Cookies.get("token")) {
      onLikes(event.target.checked);
    }
  };

  return (
    <Card key={slug} id={styles.card}>
      <CardContent>
        <div className={styles["card-block"]}>
          <div className={styles["card-link-block"]}>
            <div className={styles["card-icon-block"]}>
            <div className={styles["title-title"]}>
              <Link to={`/${slug}`}>
                <div id={styles["card-link"]}>
                  {title.length > 25 ? `${title.slice(0, 25)}...` : title}
                </div>
              </Link>
              <Checkbox
                icon={<FavoriteBorder id={styles.like} />}
                checkedIcon={<Favorite  />}
                onChange={handleLike}
                checked={favorited}
                sx={{
                  color: "white",
                  "&.Mui-checked": {
                    color: red[600],
                  },
                }}
              />
              <span id={styles["favorites-count"]}>{favoritesCount}</span>
              </div>
              <div className={styles["avatar-block"]}>
                <div className={styles["avatar-text"]}>
                  <Typography
                    id={styles["avatar-name"]}
                    variant="h2"
                    component="h2"
                    onClick={handleCardClick}
                  >
                    {username}
                  </Typography>
                  <Typography id={styles["avatar-date"]} variant="body1">
                    {formatDate(createdAt)}
                  </Typography>
                </div>
                <Avatar
                  id={styles["avatar"]}
                  onClick={handleCardClick}
                  src={image}
                  sx={{ bgcolor: "#05b577" }}
                ></Avatar>
              </div>
            </div>
            {tagList &&
              tagList.map((tag, index) => (
                <Chip
                  key={index}
                  onClick={handleCardClick}
                  id={styles["tag"]}
                  variant="outlined"
                  label={
                    tag && tag.length > 10 ? `${tag.slice(0, 10)}...` : tag
                  }
                  style={{ color: "white", marginRight: "10px" }}
                />
              ))}
          </div>
        </div>
        <Typography
          onClick={handleCardClick}
          id={styles["description"]}
          style={{ fontFamily: "Regular", cursor: "pointer" }}
          variant="body1"
        >
          {description > 100 ? `${description.slice(0, 100)}...` : description}
        </Typography>
      </CardContent>
    </Card>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
};

export default ArticleCard;
