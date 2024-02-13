import { Button, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Picture1 from "../../images/Picture1.jpg";
import Picture2 from "../../images/Picture2.jpg";
import Picture3 from "../../images/Picture3.jpg";
import Picture4 from "../../images/Picture4.jpg";
import Picture5 from "../../images/Picture5.jpg";
import Picture6 from "../../images/Picture6.jpg";
import Picture7 from "../../images/Picture7.jpg";
import Picture8 from "../../images/Picture8.jpg";
import Picture9 from "../../images/Picture9.jpg";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const ZoomParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture7,
      scale: scale4,
    },
    {
      src: Picture1,
      scale: scale9,
    },
    {
      src: Picture2,
      scale: scale6,
    },
    {
      src: Picture3,
      scale: scale9,
    },
    {
      src: Picture4,
      scale: scale6,
    },
    {
      src: Picture5,
      scale: scale8,
    },
    {
      src: Picture6,
      scale: scale9,
    },
    {
      src: Picture8,
      scale: scale6,
    },
    {
      src: Picture9,
      scale: scale8,
    },
  ];

  return (
    <div ref={container} className={styles.container}>
      <Typography id={styles["title"]} variant="h1" component="h1">
        <span style={{ color: "#05b577" }}>R</span>
        <span>eal</span>
        <span style={{ color: "#05b577" }}>W</span>
        <span>orld</span>
        <span style={{ color: "#05b577" }}> B</span>
        <span>log</span>
      </Typography>
      <div className={styles.sticky}>
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <img
                  src={src}
                  alt="image"
                  placeholder="blur"
                  className={styles.image}
                />
                {pictures[index].src === Picture7 && (
                  <div className={styles.overlay}>
                    <Link to={"/articles"}>
                      <Button variant="outlined" color="inherit">
                        ENTER
                      </Button>
                    </Link>
                    <span className={styles["button-text"]}>
                      Immerse yourself in the RealWorld
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ZoomParallax;
