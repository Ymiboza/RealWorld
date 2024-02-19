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

export const editPost = createAsyncThunk(
  "articles/editPost",
  async ({ title, description, body, slug, tags }, { rejectWithValue }) => {
    return await axios
      .put(
        `https://blog.kata.academy/api/articles/${slug}`,
        {
          article: {
            title,
            description,
            body,
            tagList: tags,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${Cookies.get("token")}`,
          },
        }
      )
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err.message));
  }
);

export const deletePost = createAsyncThunk(
  "articles/deletePost",
  async (slug, { rejectWithValue }) => {
    return await axios
      .delete(
        `https://blog.kata.academy/api/articles/${slug}`,

        { headers: { Authorization: `Token ${Cookies.get("token")}` } }
      )
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err.message));
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
        state.error = false;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = "resolved";
        state.slug = action.payload.article.slug;
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(editPost.pending, (state) => {
        state.status = "pending";
        state.error = false;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.status = "resolved";
        state.slug = action.payload.article.slug;
      })
      .addCase(editPost.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default postsSlice.reducer;
