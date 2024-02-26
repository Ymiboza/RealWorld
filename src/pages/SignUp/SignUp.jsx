import {
  Alert,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../store/userSlice";
import styles from "./SignUp.module.css";

const SignUp = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [open, setOpen] = useState(false);
  const error = useSelector((state) => state.users.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputPropsStyle = {
    color: "white",
    "&::placeholder": {
      color: "white",
      fontFamily: "Regular",
    },
  };

  const {
    register,
    formState: { errors, isValid },
    watch,
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const password = watch("password");

  const onSubmit = (event) => {
    const data = {
      username: event.username,
      email: event.email,
      password: event.password,
    };
    dispatch(createUser(data));
    setFormSubmitted(true);
  };

  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    if (formSubmitted && error === null) {
      navigate(-1);
      reset();
    } else if (error && error.email) {
      setOpen(true);
      reset();
    }
  }, [formSubmitted, error, reset, navigate]);

  return (
    <>
      {error && error.email && (
        <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Email is already taken!
          </Alert>
        </Snackbar>
      )}
      <div className={styles["signUp-container"]}>
        <Typography id={styles["title"]}>Create new account</Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles["signUp-form"]}
        >
          <TextField
            id={styles.usernameField}
            label="Username"
            variant="outlined"
            margin="normal"
            color="success"
            InputProps={{ style: inputPropsStyle }}
            InputLabelProps={{ style: { color: "white" } }}
            {...register("username", {
              required: "user is required",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "username can only contain Latin letters and numbers",
              },
              minLength: { value: 3, message: "minimum of 3 characters" },
              maxLength: { value: 20, message: "maximum of 20 characters" },
            })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            id={styles.emailField}
            label="Email address"
            variant="outlined"
            margin="normal"
            color="success"
            InputProps={{ style: inputPropsStyle }}
            InputLabelProps={{ style: { color: "white" } }}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            id={styles.passwordField}
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            color="success"
            InputProps={{
              style: inputPropsStyle,
            }}
            InputLabelProps={{ style: { color: "white" } }}
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^[a-zA-Z0-9!@#$%^&*()_+<>?,.`~*/\\|]+$/,
                message: "Password can only contain Latin letters and numbers",
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              maxLength: {
                value: 40,
                message: "Password must be at most 40 characters long",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <TextField
            id={styles.repeatPasswordField}
            label="Repeat password"
            type="password"
            variant="outlined"
            margin="normal"
            color="success"
            InputProps={{ style: inputPropsStyle }}
            InputLabelProps={{ style: { color: "white" } }}
            {...register("repeatPassword", {
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            error={!!errors.repeatPassword}
            helperText={errors.repeatPassword?.message}
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
          id={styles["signUp-checkbox"]}
          control={<Checkbox onChange={handleCheckboxChange} color="success" />}
          label="I agree to the processing of my personal 
        information"
        />
        <div className={styles["button-block"]}>
          <Button
            id={styles["signUp-button"]}
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid || !agreed}
            type="submit"
            variant="contained"
          >
            Create
          </Button>
          <Typography
            variant="body2"
            id={styles["link-text"]}
            style={{ color: "white", marginTop: "10px", fontFamily: "Regular" }}
          >
            Already have an account?{" "}
            <Link to={"/sign-in"} style={{ color: "#05b577" }}>
              Sign In.
            </Link>
          </Typography>
        </div>
      </div>
    </>
  );
};

export default SignUp;
