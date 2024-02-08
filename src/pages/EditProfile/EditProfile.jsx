import { Button, TextField, Typography } from "@mui/material";
import styles from "./EditProfile.module.css";

const EditProfile = () => {
  const inputPropsStyle = {
    color: "white",
    "&::placeholder": {
      color: "white",
      fontFamily: "Regular",
    },
  };
  return (
    <div className={styles["editProfile-container"]}>
      <Typography
        style={{
          fontFamily: "Regular",
          fontSize: "27px",
          marginTop: "50px",
          marginBottom: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        Edit Profile
      </Typography>
      <form className={styles["editProfile-form"]}>
        <TextField
          id={styles.usernameField}
          label="Username"
          variant="outlined"
          margin="normal"
          color="success"
          InputProps={{ style: inputPropsStyle }}
          InputLabelProps={{ style: { color: "white" } }}
        />
        <TextField
          id={styles.emailField}
          label="Email address"
          variant="outlined"
          margin="normal"
          color="success"
          InputProps={{ style: inputPropsStyle }}
          InputLabelProps={{ style: { color: "white" } }}
        />
        <TextField
          id={styles.passwordField}
          label="New password"
          variant="outlined"
          margin="normal"
          color="success"
          InputProps={{ style: inputPropsStyle }}
          InputLabelProps={{ style: { color: "white" } }}
        />
        <TextField
          id={styles.repeatPasswordField}
          label="Avatar image URL"
          variant="outlined"
          margin="normal"
          color="success"
          InputProps={{ style: inputPropsStyle }}
          InputLabelProps={{ style: { color: "white" } }}
        />
      </form>
      <div className={styles["button-block"]}>
        <Button id={styles["editProfile-button"]} variant="contained">
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;
