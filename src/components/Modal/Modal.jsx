import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { Button } from "@mui/material";

const ModalDelete = ({ open, handleClose, deleteArticle }) => {
  const style = {
    p: 6,
  };
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      id={styles.modal}
    >
      <Box id={styles.box} sx={style}>
        <Typography id={styles["title"]} variant="h6" component="h2">
          You want to delete this article?
        </Typography>
        <div className={styles["buttons-block"]}>
          <Button
            id={styles["button-yes"]}
            onClick={deleteArticle}
            variant="outlined"
          >
            Yes
          </Button>
          <Button
            id={styles["button-no"]}
            onClick={handleClose}
            variant="outlined"
          >
            No
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

ModalDelete.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
};

export default ModalDelete;
