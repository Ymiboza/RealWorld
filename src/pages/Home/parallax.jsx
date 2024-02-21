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

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const image = {
    Picture1:
      "https://img.freepik.com/free-photo/amazing-shot-ferchensee-lake-bavaria-germany_181624-29701.jpg?w=1800&t=st=1708521168~exp=1708521768~hmac=f7b2d6c130fc9ace270cdba646bd74c339db3eedd4f9a8609144315e07ce41cb  ",
    Picture2:
      "  https://img.freepik.com/free-photo/mountain-with-pine-trees-covered-with-fogs_198169-89.jpg?w=1800&t=st=1708520713~exp=1708521313~hmac=0244c0740aa9135b9c92d7fec68237ab017ad83ef220197c33818bf3b14c0146",
    Picture3:
      "https://img.freepik.com/free-photo/foggy-forest_198169-143.jpg?w=1800&t=st=1708520841~exp=1708521441~hmac=6896f0115b1743bdf8dae9a963e5a924e4eea82e97943f4df84ca8607c39536a",
    Picture4:
      "https://img.freepik.com/free-photo/high-angle-shot-beautiful-tropical-jungle-full-trees_181624-4961.jpg?w=2000&t=st=1708520830~exp=1708521430~hmac=2fc449b3d45f00044b84915b7849d084f6ea0c4c8f55940c76d9ebd53105c4b4",
    Picture5:
      "https://img.freepik.com/free-photo/beautiful-shot-forest-with-tall-green-trees_181624-20615.jpg?w=1800&t=st=1708520528~exp=1708521128~hmac=c217ef6388ed6f3e17a42295c40c6d50cbf85c99bd0c079ea1a05f34642f4945",
    Picture6:
      "https://img.freepik.com/free-photo/curvy-narrow-muddy-road-dark-forest-surrounded-by-greenery-little-light-coming-from_181624-1825.jpg?w=1800&t=st=1708520734~exp=1708521334~hmac=ca45611e2dd450012ef4ab822ae451b0c7e6c5ab9ad3cc7857649a64a5d18f1a",
    Picture7:
      " https://img.freepik.com/free-photo/dew-dark-leaves_23-2147810915.jpg?w=1800&t=st=1708521466~exp=1708522066~hmac=a289d988deba9f6723d644de147a69286a5ea0d0a0ce00901282e6ead797ff2d",
    Picture8:
      "https://img.freepik.com/free-photo/backdrop-green-leaves_23-2147836966.jpg?w=1800&t=st=1708521440~exp=1708522040~hmac=44d751cd3c5392698e16cbcadb56947f31fe080b53870217937c3d6323d8a24e",
    Picture9:
      "https://img.freepik.com/free-photo/fresh-green-fern-leaves_23-2147831030.jpg?w=1800&t=st=1708520822~exp=1708521422~hmac=7d1bc5512d571799cc031edfca23d45c4028e6a6c72c3920ea7f91f375492716",
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
