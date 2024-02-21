import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { getArticles } from "../../store/articleSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  const location = useLocation();
  const isBlogListPage = location.pathname === "/articles";
  const isHomePage = location.pathname === "/";
  const dispatch = useDispatch();
  const [page, setPage] = useState(() => {
    const storedPage = localStorage.getItem('currentPage')
    return storedPage ? parseInt(storedPage, 10) : 1
  })

  useEffect(() => {
    dispatch(getArticles(page));
  }, [dispatch, page]);

  useEffect(() => {
    localStorage.setItem('currentPage', page.toString())
  }, [page])

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
            onPageChange={handlePageChange}
            page={page}
          />
        </footer>
      )}
    </>
  );
};

export default Layout;
