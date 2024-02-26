import { Button, TextField, Typography } from "@mui/material";
import styles from "./EditProfile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const EditProfile = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.users.user);
  const image = useSelector((state) => state.users.image);
  const error = useSelector((state) => state.users.error);

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

  const onSubmit = async (event) => {
    dispatch(updateUser(event));
    setFormSubmitted(true);
  };

  useEffect(() => {
    if (formSubmitted && error === null) {
      navigate(-1);
      reset();
    }
  }, [formSubmitted, error, reset, navigate]);

  return (
    user && (
      <div className={styles["editProfile-container"]}>
        <Typography id={styles["title"]}>Edit Profile</Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles["editProfile-form"]}
        >
          <TextField
            defaultValue={user && user?.username}
            id={styles.usernameField}
            label="Username"
            variant="outlined"
            margin="normal"
            color="success"
            InputProps={{ style: inputPropsStyle }}
            InputLabelProps={{ style: { color: "white" } }}
            {...register("username", {
              required: "User is required",
              pattern: {
                value: /^[a-zA-Z0-9]+$/,
                message: "Username can only contain Latin letters and numbers",
              },
              minLength: { value: 3, message: "minimum of 3 characters" },
              maxLength: { value: 20, message: "maximum of 20 characters" },
            })}
            error={!!errors.username}
            helperText={errors.username?.message}
          />
          <TextField
            defaultValue={user && user?.email}
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
            label="New password"
            variant="outlined"
            type="password"
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
          <TextField
            defaultValue={image}
            id={styles.repeatPasswordField}
            label="Avatar image URL"
            variant="outlined"
            margin="normal"
            color="success"
            InputProps={{ style: inputPropsStyle }}
            InputLabelProps={{ style: { color: "white" } }}
            {...register("image", {})}
            error={!!errors.image}
            helperText={errors.image?.message}
          />
        </form>
        <div className={styles["button-block"]}>
          <Button
            onClick={handleSubmit(onSubmit)}
            disabled={!isValid}
            type="submit"
            id={styles["editProfile-button"]}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </div>
    )
  );
};

export default EditProfile;
