import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const baseApi = "https://blog.kata.academy/api/";

export const getArticles = createAsyncThunk(
  "articles/articlesFetch",
  async (page, { rejectWithValue }) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Cookies.get("token")}`,
      },
    };
    try {
      const response = await axios.get(
        `${baseApi}articles?offset=${(page - 1) * 6}&limit=6`,
        config
      );
      console.log("response:", response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const articleSlice = createSlice({
  name: "articlesSlice",
  initialState: {
    articles: [],
    status: null,
    error: null,
    count: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.status = "resolved";
        state.articles = action.payload.articles;
        state.count = action.payload.articlesCount;
      })
      .addCase(getArticles.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default articleSlice.reducer;
