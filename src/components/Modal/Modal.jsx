import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { Button } from "@mui/material";

const ModalDelete = ({ open, handleClose, deleteArticle }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "black",
    boxShadow: "0px 0px 5px 2px #09da91",
    p: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
    >
      <Box sx={style}>
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
