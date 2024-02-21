import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../store/userSlice";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
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
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (event) => {
    const data = {
      email: event.email,
      password: event.password,
    };
    dispatch(loginUser(data));
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formSubmitted && error === null) {
      navigate(-1);
      reset();
    }
  }, [formSubmitted, error, reset, navigate]);

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
      <form onSubmit={handleSubmit(onSubmit)} className={styles["signIn-form"]}>
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
          InputProps={{ style: inputPropsStyle }}
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
      </form>
      <div className={styles["button-block"]}>
        <Button
          id={styles["signIn-button"]}
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
          variant="contained"
          type="submit"
        >
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
