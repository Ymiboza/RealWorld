import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const inputPropsStyle = {
    color: "white",
    "&::placeholder": {
      color: "white",
      fontFamily: "Regular",
    },
  };
  return (
    <div className={styles["signIn-container"]}>
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
        Sign In
      </Typography>
      <form className={styles["signIn-form"]}>
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
      </form>
      <div className={styles["button-block"]}>
        <Button id={styles["signIn-button"]} variant="contained">
          Login
        </Button>
        <Typography
          variant="body2"
          style={{ color: "white", marginTop: "10px", fontFamily: "Regular" }}
        >
          Don’t have an account?{" "}
          <Link to={"/sign-up"} style={{ color: "#05b577" }}>
            Sign Up.
          </Link>
        </Typography>
      </div>
    </div>
  );
};

export default SignIn;
