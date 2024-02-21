import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../store/postsSlice";
import styles from "./CreateArticle.module.css";

const CreateArticle = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const handleAddTag = () => {
    if (inputValue.trim() !== '') {
      setTags([...tags, inputValue])
      setInputValue('')
    }
  }

  const handleDeleteTag = (tagToDelete) => {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(updatedTags);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (event) => {
    const data = { ...event, tags};
    await dispatch(addPost(data));
    reset();
    navigate("/articles");
  };
  const inputPropsStyle = {
    color: "white",
    "&::placeholder": {
      color: "white",
      fontFamily: "Regular",
    },
  };

  return (
    <div className={styles.container}>
      <Card id={styles["create-post"]}>
        <Typography
          variant="h4"
          component="h4"
          style={{
            fontFamily: "Regular",
            fontSize: "40px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          Create new article
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles["signUp-form"]}
        >
          <div className={styles["create-textField"]}>
            <TextField
              id={styles.titleField}
              label="Title"
              variant="outlined"
              margin="normal"
              color="success"
              InputProps={{ style: inputPropsStyle }}
              InputLabelProps={{ style: { color: "white" } }}
              {...register("title", {
                required: "Title is required",
              })}
              error={!!errors.title}
              helperText={errors.title?.message}
            />
            <TextField
              id={styles.shortField}
              label="Short description"
              variant="outlined"
              margin="normal"
              color="success"
              InputProps={{ style: inputPropsStyle }}
              InputLabelProps={{ style: { color: "white" } }}
              {...register("description", {
                required: "Description is required",
              })}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
            <TextField
              id={styles.textField}
              label="Text"
              multiline
              fullWidth
              rows={8}
              focused
              variant="outlined"
              margin="normal"
              color="success"
              InputProps={{ style: inputPropsStyle }}
              InputLabelProps={{ style: { color: "white" } }}
              {...register("body", {
                required: "Text is required",
              })}
              error={!!errors.body}
              helperText={errors.body?.message}
            />
          </div>
          <div className={styles["tags-block"]}>
            <div className={styles["tags-content"]}>
              <div className={styles["tags"]}>
                <TextField
                  id={styles.tagsField}
                  value={inputValue || ""}
                  label="Tags"
                  variant="outlined"
                  margin="normal"
                  color="success"
                  InputProps={{ style: inputPropsStyle }}
                  InputLabelProps={{ style: { color: "white" } }}
                  focused
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Button
                  onClick={handleAddTag}
                  id={styles["create-add-button"]}
                  variant="outlined"
                >
                  <AddIcon />
                </Button>
              </div>
              <Box>
                {tags.map((tag, index) => (
                  <div key={index} id={styles["tag-button"]}>
                    <Box key={index} id={styles["tags"]}>
                      {tag.length > 10
                        ? `${tag.slice(0, 10)}...`
                        : tag}
                    </Box>
                    <Button
                      id={styles["create-delete-button"]}
                      variant="outlined"
                      onClick={() => handleDeleteTag(tag)}
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </div>
                ))}
              </Box>
            </div>
          </div>
          <div className={styles["main-button"]}>
            <Button
              id={styles["create-button"]}
              type="submit"
              variant="contained"
            >
              Create
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateArticle;
