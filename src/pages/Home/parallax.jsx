import { Button, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const ZoomParallax = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const image = {
    Picture1:
      "https://www.boredpanda.com/blog/wp-content/uploads/2014/11/Karol-Nienartowicz-The-Polish-Adventurous-Mountain-Photographer60__880.jpg", //?2
    Picture2:
      "https://www.boredpanda.com/blog/wp-content/uploads/2014/11/Karol-Nienartowicz-The-Polish-Adventurous-Mountain-Photographer70__880.jpg", //?1
    Picture3:
      "https://www.boredpanda.com/blog/wp-content/uploads/2014/11/Karol-Nienartowicz-The-Polish-Adventurous-Mountain-Photographer64__880.jpg", //?3
    Picture4:
      "https://www.boredpanda.com/blog/wp-content/uploads/2014/11/Karol-Nienartowicz-The-Polish-Adventurous-Mountain-Photographer68__880.jpg", //?8
    Picture5:
      "https://www.boredpanda.com/blog/wp-content/uploads/2014/11/Karol-Nienartowicz-The-Polish-Adventurous-Mountain-Photographer66__880.jpg", //?7
    Picture6:
      "https://www.boredpanda.com/blog/wp-content/uploads/2014/11/Karol-Nienartowicz-The-Polish-Adventurous-Mountain-Photographer69__880.jpg", //?9
    Picture7:
      "https://images.unsplash.com/photo-1542708993627-b6e5bbae43c4?q=80&w=2644&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", //?5
    Picture8:
      "https://www.boredpanda.com/blog/wp-content/uploads/2014/11/Karol-Nienartowicz-The-Polish-Adventurous-Mountain-Photographer47__880.jpg", //?6
    Picture9:
      "https://www.boredpanda.com/blog/wp-content/uploads/2014/11/Karol-Nienartowicz-The-Polish-Adventurous-Mountain-Photographer45__880.jpg", //?4
  };

  const pictures = [
    {
      src: image.Picture7,
      scale: scale4,
    },
    {
      src: image.Picture1,
      scale: scale9,
    },
    {
      src: image.Picture2,
      scale: scale6,
    },
    {
      src: image.Picture3,
      scale: scale9,
    },
    {
      src: image.Picture4,
      scale: scale6,
    },
    {
      src: image.Picture5,
      scale: scale8,
    },
    {
      src: image.Picture6,
      scale: scale9,
    },
    {
      src: image.Picture8,
      scale: scale6,
    },
    {
      src: image.Picture9,
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
                {pictures[index].src === image.Picture7 && (
                  <div className={styles.overlay}>
                    <Link to={"/articles"}>
                      <Button id={styles["button"]} variant="outlined" color="inherit">
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
