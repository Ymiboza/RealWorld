import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const isBlogListPage = location.pathname === "/blog-list";
  const isHomePage = location.pathname === "/";
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
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Layout;
