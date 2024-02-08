import { Button, Card, TextField, Typography } from "@mui/material";
import styles from "./CreateArticle.module.css";
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CreateArticle = () => {
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
        <div className={styles["create-textField"]}>
        <TextField
          id={styles.titleField}
          label="Title"
          variant="outlined"
          margin="normal"
          color="success"
          InputProps={{ style: inputPropsStyle }}
          InputLabelProps={{ style: { color: "white" } }}
        />
        <TextField
          id={styles.shortField}
          label="Short description"
          variant="outlined"
          margin="normal"
          color="success"
          InputProps={{ style: inputPropsStyle }}
          InputLabelProps={{ style: { color: "white" } }}
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
        />
        </div>
        <div className={styles["tags-block"]}>
          <div className={styles["tags-content"]}>
            <TextField
              id={styles.tagsField}
              label="Tags"
              variant="outlined"
              margin="normal"
              color="success"
              InputProps={{ style: inputPropsStyle }}
              InputLabelProps={{ style: { color: "white" } }}
              focused
            />
            <Button id={styles["create-delete-button"]} variant="outlined">
              <DeleteForeverIcon/>
            </Button>
            <Button id={styles["create-add-button"]} variant="outlined">
            <AddIcon/>
            </Button>
          </div>
        </div>
        <div className={styles["main-button"]}>
        <Button id={styles["create-button"]} variant="contained">
          Create
        </Button>
        </div>
      </Card>
    </div>
  );
};

export default CreateArticle;
