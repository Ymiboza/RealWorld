import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./articleSlice";
import userSlice from "./userSlice";
import postsSlice from "./postsSlice";

export default configureStore({ reducer: { articles: articleSlice, users: userSlice, posts: postsSlice } });
