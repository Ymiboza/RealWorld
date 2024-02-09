import { Pagination } from "@mui/material";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./Footer.module.css";

const Footer = ({ onPageChange }) => {
  const count = useSelector((state) => state.articles.count);
  return (
    <div className={styles["footer-container"]}>
      <Pagination
        onChange={onPageChange}
        id={styles["footer-pagination"]}
        shape="rounded"
        count={count ? Math.ceil(count / 5) : 0}
      />
    </div>
  );
};

Footer.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

export default Footer;
