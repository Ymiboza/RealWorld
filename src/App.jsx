import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Article from "./pages/Article/Article";
import BlogList from "./pages/BlogList/BlogList";
import CreateArticle from "./pages/CreateArticle/CreateArticle";
import EditArticle from "./pages/EditArticle/EditArticle";
import EditProfile from "./pages/EditProfile/EditProfile";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

function App() {
  const user = useSelector((state) => state.users.user);
  const article = useSelector((state) => state.articles.article);
  const articleString = JSON.stringify(article);
  localStorage.setItem("article", articleString);
  const savedArticleString = localStorage.getItem("article");
  const savedArticle = JSON.parse(savedArticleString);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="articles" element={<BlogList />} />
          <Route path=":slug" element={<Article />} />
          <Route path="create-article" element={<CreateArticle />} />
          <Route
            path=":slug/edit-article"
            element={
              Cookies.get("token") &&
              user &&
              savedArticle &&
              user.username &&
              savedArticle.author &&
              savedArticle.author.username &&
              user.username === savedArticle.author.username ? (
                <EditArticle />
              ) : (
                <Article />
              )
            }
          />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
