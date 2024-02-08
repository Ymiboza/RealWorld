import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import BlogList from "./pages/BlogList/BlogList";
import Article from "./pages/Article/Article";
import CreateArticle from "./pages/CreateArticle/CreateArticle";
import EditArticle from "./pages/EditArticle/EditArticle";
import EditProfile from "./pages/EditProfile/EditProfile";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return <>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="blog-list" element={<BlogList/>}/>
          <Route path="article" element={<Article/>}/>
          <Route path="create-article" element={<CreateArticle/>}/>
          <Route path="edit-article" element={<EditArticle/>}/>
          <Route path="edit-profile" element={<EditProfile/>}/>
          <Route path="sign-in" element={<SignIn/>}/>
          <Route path="sign-up" element={<SignUp/>}/>
        </Route>
    </Routes>
  </>;
}

export default App;
