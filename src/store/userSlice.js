import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (data, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      user: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    };
    try {
      const response = await axios.post(
        "https://blog.kata.academy/api/users",
        body,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = {
      user: {
        email: data.email,
        password: data.password,
      },
    };
    try {
      const response = await axios.post(
        "https://blog.kata.academy/api/users/login",
        body,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Cookies.get("token")}`,
      },
    };
    try {
      const response = await axios.get(
        "https://blog.kata.academy/api/user",
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Cookies.get("token")}`,
      },
    };
    const body = {
      user: {
        password: data.password,
        email: data.email,
        username: data.username,
        image: data.image,
      },
    };
    try {
      const response = await axios.put(
        "https://blog.kata.academy/api/user",
        body,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors);
    }
  }
);

const userSlice = createSlice({
  name: "articlesSlice",
  initialState: {
    user: null,
    status: null,
    error: null,
    image: "https://i.pinimg.com/originals/03/fd/dc/03fddc06151ab5228fc38f33494f53d8.jpg",
  },
  reducers: {
    logOut(state) {
      state.user = null;
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state,action) => {
        state.status = "pending";
        state.error = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
        state.user = action.payload.user;
        Cookies.set("token", `${action.payload.user.token}`);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.error = null;
        state.user = action.payload.user;
        Cookies.set("token", `${action.payload.user.token}`);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.user = action.payload.user;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "resolved";
        state.user = action.payload.user;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});
export const { logOut } = userSlice.actions;
export default userSlice.reducer;
