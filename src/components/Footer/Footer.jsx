import Pagination from "@mui/material/Pagination";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import styles from "./Footer.module.css";
import styled from "@emotion/styled";

const Footer = ({ onPageChange, page }) => {
  const count = useSelector((state) => state.articles.count);
  const status = useSelector((state) => state.articles.status);

  const StyledPagination = styled(Pagination)`
    &.MuiPagination-root {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      .MuiPaginationItem-root {
        color: white;
        font-family: "Regular";
      }

      .Mui-selected {
        background-color: #09da91;
        color: black;
      }
    }
  `;

  return (
    <div className={styles["footer-container"]}>
      {status !== "pending" && (
        <StyledPagination
          onChange={onPageChange}
          page={page}
          id={styles["footer-pagination"]}
          shape="rounded"
          count={count ? Math.ceil(count / 5) : 0}
        />
      )}
    </div>
  );
};

Footer.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Footer;
