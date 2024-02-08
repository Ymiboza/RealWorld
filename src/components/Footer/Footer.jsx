import { Pagination } from "@mui/material";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <Pagination id={styles["footer-pagination"]} count={10} shape="rounded"/>
    </div>
  );
};

export default Footer;
