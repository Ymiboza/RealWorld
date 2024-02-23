import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { getArticles } from "../../store/articleSlice";
import styles from "./BlogList.module.css";
import { CircularProgress } from "@mui/material";

const BlogList = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articles);
  const status = useSelector((state) => state.articles.status);
  const [page] = useState(() => {
    const storedPage = localStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage, 10) : 1;
  });

  useEffect(() => {
    localStorage.setItem("currentPage", page.toString());
  }, [page]);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {status === "pending" ? (
        <CircularProgress id={styles.loader} size={150} color="success" />
      ) : (
        articles &&
        articles.map((article, index) => (
          <ArticleCard key={index} article={article} page={page} />
        ))
      )}
    </div>
  );
};

export default BlogList;
