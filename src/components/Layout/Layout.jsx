import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { getArticles } from "../../store/articleSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  const location = useLocation();
  const isBlogListPage = location.pathname === "/blog-list";
  const isHomePage = location.pathname === "/";

  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state.articles);
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    dispatch(getArticles(page));
  }, [dispatch, page]);

  const handlePageChange = (_, page) => {
    setPage(page);
  };

  return (
    <>
      {!isHomePage && (
        <header>
          <Header />
        </header>
      )}
      <main>
        <Outlet />
      </main>
      {isBlogListPage && (
        <footer>
          <Footer
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </footer>
      )}
    </>
  );
};

export default Layout;
