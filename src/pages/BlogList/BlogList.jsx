import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { getArticles } from "../../store/articleSlice";
import styles from "./BlogList.module.css";

const BlogList = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {articles &&
        articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
    </div>
  );
};

export default BlogList;
