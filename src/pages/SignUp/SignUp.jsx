import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const inputPropsStyle = {
    color: "white",
    "&::placeholder": {
      color: "white",
      fontFamily: "Regular",
    },
  };
  return (
    <div className={styles["signUp-container"]}>
      <Typography
        style={{
          fontFamily: "Regular",
          fontSize: "20px",
          marginTop: "50px",
          marginBottom: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        Create new account
      </Typography>
      <form className={styles["signUp-form"]}>
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
          label="Password"
          variant="outlined"
          margin="normal"
          color="success"
          InputProps={{ style: inputPropsStyle }}
          InputLabelProps={{ style: { color: "white" } }}
        />
        <TextField
          id={styles.repeatPasswordField}
          label="Repeat password"
          variant="outlined"
          margin="normal"
          color="success"
          InputProps={{ style: inputPropsStyle }}
          InputLabelProps={{ style: { color: "white" } }}
        />

        <Divider
          orientation="horizontal"
          variant="middle"
          style={{
            marginTop: "20px",
            marginBottom: "5px",
            width: "86%",
            backgroundColor: "#05b577",
          }}
        />
      </form>
      <FormControlLabel
        control={<Checkbox defaultChecked color="success" />}
        label="I agree to the processing of my personal 
        information"
        style={{ color: "white", marginLeft: "25px", fontFamily: "Regular" }}
      />
      <div className={styles["button-block"]}>
        <Button id={styles["signUp-button"]} variant="contained">
          Create
        </Button>
        <Typography
          variant="body2"
          style={{ color: "white", marginTop: "10px", fontFamily: "Regular" }}
        >
          Already have an account?{" "}
          <Link to={"/sign-in"} style={{ color: "#05b577" }}>
            Sign In.
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default SignUp;
