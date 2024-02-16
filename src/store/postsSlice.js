import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const addPost = createAsyncThunk(
  "user/addPost",
  async (data, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Cookies.get("token")}`,
      },
    };

    const body = {
      article: {
        title: data.title,
        description: data.description,
        body: data.body,
        tagList: data.tags,
      },
    };
    try {
      const response = await axios.post(
        "https://blog.kata.academy/api/articles",
        body,
        config
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const postsSlice = createSlice({
  name: "postsSlice",
  initialState: {
    status: null,
    error: null,
    slug: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = "resolved";
        state.slug = action.payload.article.slug
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default postsSlice.reducer;
