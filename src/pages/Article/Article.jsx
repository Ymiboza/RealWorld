import { Favorite, FavoriteBorder } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import {
  Avatar,
  Card,
  CardContent,
  Checkbox,
  Chip,
  CircularProgress,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import ModalDelete from "../../components/Modal/Modal";
import { getOneArticle } from "../../store/articleSlice";
import {
  deletePost,
  favoritePost,
  unFavoritePost,
} from "../../store/postsSlice";
import styles from "./Article.module.css";

const Article = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const article = useSelector((state) => state.articles.article);
  const user = useSelector((state) => state.users.user);
  const navigate = useNavigate();
  const status = useSelector((state) => state.articles.status);

  const {
    title,
    favorited,
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

  const editFunc = () => {
    if (article && user) {
      const editing = article.author.username === user.username;
      return editing;
    }
    return null;
  };

  const onDelete = () => {
    dispatch(deletePost(slug)).then(() => navigate("/articles"));
  };

  const onLikes = async (isChecked) => {
    if (isChecked) {
      await dispatch(favoritePost(slug));
    } else {
      await dispatch(unFavoritePost(slug));
    }

    dispatch(getOneArticle(slug));
  };

  const handleLike = async (event) => {
    if (Cookies.get("token")) {
      onLikes(event.target.checked);
    }
  };

  return (
    <>
      {status === "pending" ? (
        <div className={styles.container}>
          <Card id={styles["post"]}>
            <CircularProgress id={styles.loader} size={150} color="success" />
          </Card>
        </div>
      ) : (
        title &&
        title.length && (
          <div className={styles.container}>
            <Card id={styles["post"]}>
              <CardContent>
                <div className={styles["post-block"]}>
                  <div className={styles["post-link-block"]}>
                    <div className={styles["post-icon-block"]}>
                      <div className={styles["title-title"]}>
                        {title && title.length && (
                          <Link id={styles["post-link"]}>
                            {title.length > 30
                              ? `${title.slice(0, 30)}...`
                              : title}
                          </Link>
                        )}
                        <Checkbox
                          onChange={handleLike}
                          checked={favorited}
                          icon={<FavoriteBorder id={styles.like} />}
                          checkedIcon={<Favorite />}
                          sx={{
                            color: "white",
                            "&.Mui-checked": {
                              color: red[600],
                            },
                          }}
                        />
                        <span
                          id={styles["favorites-count"]}
                          style={{ marginRight: "10px" }}
                        >
                          {favoritesCount}
                        </span>
                        {editFunc() && (
                          <Stack direction="row" spacing={0}>
                            <Tooltip arrow title="Edit article" placement="top">
                              <Link to={`/${slug}/edit-article`}>
                                <EditIcon id={styles["edit-button"]} />
                              </Link>
                            </Tooltip>
                            <Tooltip
                              arrow
                              title="Delete article"
                              placement="top"
                            >
                              <DeleteForeverIcon
                                onClick={handleOpen}
                                id={styles["delete-button"]}
                              />
                            </Tooltip>
                            <ModalDelete
                              open={open}
                              handleClose={handleClose}
                              deleteArticle={onDelete}
                            />
                          </Stack>
                        )}
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
                          <Typography
                            id={styles["avatar-date"]}
                            variant="body1"
                          >
                            {formatDate(updatedAt)}
                          </Typography>
                        </div>
                        <Avatar
                          id={styles["avatar"]}
                          src={image}
                          sx={{ bgcolor: "#05b577", width: 56, height: 56 }}
                        />
                      </div>
                    </div>
                    {tagList &&
                      tagList.map((tag, index) => (
                        <Chip
                          key={index}
                          id={styles["tag"]}
                          variant="outlined"
                          label={
                            tag && tag.length > 20
                              ? `${tag.slice(0, 20)}...`
                              : tag
                          }
                          style={{ color: "white", marginRight: "10px" }}
                        />
                      ))}
                  </div>
                </div>
                <Typography
                  id={styles["description"]}
                  variant="subtitle2"
                  style={{
                    wordWrap: "break-word",
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
                <Typography
                  id={styles["text"]}
                  variant="body1"
                  style={{
                    wordWrap: "break-word",
                  }}
                >
                  {body}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )
      )}
    </>
  );
};

export default Article;
