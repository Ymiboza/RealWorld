import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/postsSlice";
import styles from "./CreateArticle.module.css";

const CreateArticle = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setInputValue("");
      console.log(setInputValue(""))
    }
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
    const data = { ...event };
    await dispatch(addPost(data));
    reset();
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
      <Card id={styles["create-post"]} style={{ height: 780 }}>
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
              <TextField
                id={styles.tagsField}
                value={inputValue || ''}
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
                variant="contained"
              >
                <AddIcon />
              </Button>
              <Button id={styles["create-delete-button"]} variant="contained">
                <DeleteForeverIcon />
              </Button>
            </div>
          </div>
          <div className={styles["main-button"]}>
            <Button
              id={styles["create-button"]}
              onClick={handleSubmit(onSubmit)}
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
